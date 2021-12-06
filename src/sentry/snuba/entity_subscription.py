import re
from abc import ABC, abstractmethod
from copy import copy
from dataclasses import dataclass
from typing import Any, List, Mapping, Optional, Type, Union

from sentry.constants import CRASH_RATE_ALERT_SESSION_COUNT_ALIAS
from sentry.eventstore import Filter
from sentry.exceptions import InvalidQuerySubscription, UnsupportedQuerySubscription
from sentry.models import Environment
from sentry.release_health.metrics import metric_id, tag_key
from sentry.search.events.fields import resolve_field_list
from sentry.search.events.filter import get_filter
from sentry.snuba.dataset import EntityKey
from sentry.snuba.models import QueryDatasets, SnubaQueryEventType
from sentry.utils.snuba import Dataset, resolve_column, resolve_snuba_aliases

# TODO: If we want to support security events here we'll need a way to
# differentiate within the dataset. For now we can just assume all subscriptions
# created within this dataset are just for errors.
DATASET_CONDITIONS: Mapping[QueryDatasets, str] = {
    QueryDatasets.EVENTS: "event.type:error",
    QueryDatasets.TRANSACTIONS: "event.type:transaction",
}
ENTITY_TIME_COLUMNS: Mapping[str, str] = {
    EntityKey.Events.value: "timestamp",
    EntityKey.Sessions.value: "started",
    EntityKey.Transactions.value: "finish_ts",
    EntityKey.MetricsCounters.value: "timestamp",
}
CRASH_RATE_ALERT_AGGREGATE_RE = (
    r"^percentage\([ ]*(sessions_crashed|users_crashed)[ ]*\,[ ]*(sessions|users)[ ]*\)"
)


def apply_dataset_query_conditions(
    dataset: QueryDatasets,
    query: str,
    event_types: Optional[List[SnubaQueryEventType]],
    discover: bool = False,
) -> str:
    """
    Applies query dataset conditions to a query. This essentially turns a query like
    'release:123 or release:456' into '(event.type:error) AND (release:123 or release:456)'.
    :param dataset: The `QueryDataset` that the query applies to
    :param query: A string containing query to apply conditions to
    :param event_types: A list of EventType(s) to apply to the query
    :param discover: Whether this is intended for use with the discover dataset or not.
    When False, we won't modify queries for `QueryDatasets.TRANSACTIONS` at all. This is
    because the discover dataset requires that we always specify `event.type` so we can
    differentiate between errors and transactions, but the TRANSACTIONS dataset doesn't
    need it specified, and `event.type` ends up becoming a tag search.
    """
    if not discover and dataset == QueryDatasets.TRANSACTIONS:
        return query

    if event_types:
        event_type_conditions = " OR ".join(
            f"event.type:{event_type.name.lower()}" for event_type in event_types
        )
    elif dataset in DATASET_CONDITIONS:
        event_type_conditions = DATASET_CONDITIONS[dataset]
    else:
        return query

    if query:
        return f"({event_type_conditions}) AND ({query})"

    return event_type_conditions


@dataclass
class _EntitySubscription:
    entity_key: str
    dataset: str
    time_col: str


class BaseEntitySubscription(ABC, _EntitySubscription):
    """
    An abstraction layer for all different entity subscriptions. It is important to note that
    this abstraction layer was added because the subscription logic was too coupled to the
    events and transactions entities, which was fine initially but now as we are adding more
    entities to support subscriptions (alerts), we need to decouple this logic.
    """

    def __init__(self, aggregate: str, extra_fields: Optional[Mapping[str, Any]] = None):
        self.time_col = ENTITY_TIME_COLUMNS[self.entity_key]

    @abstractmethod
    def build_snuba_filter(
        self,
        query: str,
        environment: Optional[Environment],
        params: Optional[Mapping[str, Any]] = None,
    ) -> Filter:
        raise NotImplementedError

    @abstractmethod
    def get_entity_extra_params(self) -> Mapping[str, Any]:
        raise NotImplementedError


class BaseEventsAndTransactionEntitySubscription(BaseEntitySubscription, ABC):
    def __init__(self, aggregate: str, extra_fields: Optional[Mapping[str, Any]] = None):
        super().__init__(aggregate, extra_fields)
        self.aggregate = aggregate
        self.event_types = None
        if extra_fields:
            self.event_types = extra_fields.get("event_types")

    def build_snuba_filter(
        self,
        query: str,
        environment: Optional[Environment],
        params: Optional[Mapping[str, Any]] = None,
    ) -> Filter:
        resolve_func = resolve_column(Dataset(self.dataset))

        query = apply_dataset_query_conditions(QueryDatasets(self.dataset), query, self.event_types)
        snuba_filter = get_filter(query, params=params)
        snuba_filter.update_with(
            resolve_field_list([self.aggregate], snuba_filter, auto_fields=False)
        )
        snuba_filter = resolve_snuba_aliases(snuba_filter, resolve_func)[0]
        if snuba_filter.group_ids:
            snuba_filter.conditions.append(
                ["group_id", "IN", list(map(int, snuba_filter.group_ids))]
            )
        if environment:
            snuba_filter.conditions.append(["environment", "=", environment.name])
        return snuba_filter

    def get_entity_extra_params(self) -> Mapping[str, Any]:
        return {}


class EventsEntitySubscription(BaseEventsAndTransactionEntitySubscription):
    dataset = Dataset.Events.value
    entity_key = EntityKey.Events.value


class TransactionsEntitySubscription(BaseEventsAndTransactionEntitySubscription):
    dataset = Dataset.Transactions.value
    entity_key = EntityKey.Transactions.value


class SessionsEntitySubscription(BaseEntitySubscription):
    dataset = Dataset.Sessions.value
    entity_key = EntityKey.Sessions.value

    def __init__(self, aggregate: str, extra_fields: Optional[Mapping[str, Any]] = None):
        super().__init__(aggregate, extra_fields)
        self.aggregate = aggregate
        if not extra_fields or "org_id" not in extra_fields:
            raise InvalidQuerySubscription(
                "org_id is a required param when "
                "building snuba filter for a metrics subscription"
            )
        self.org_id = extra_fields["org_id"]

    def build_snuba_filter(
        self,
        query: str,
        environment: Optional[Environment],
        params: Optional[Mapping[str, Any]] = None,
    ) -> Filter:
        resolve_func = resolve_column(Dataset.Sessions)
        aggregations = [self.aggregate]
        # This aggregation is added to return the total number of sessions in crash
        # rate alerts that is used to identify if we are below a general minimum alert threshold
        count_col = re.search(r"(sessions|users)", self.aggregate)
        if not count_col:
            raise UnsupportedQuerySubscription(
                "Only crash free percentage queries are supported for subscriptions"
                "over the sessions dataset"
            )
        count_col_matched = count_col.group()

        aggregations += [f"identity({count_col_matched}) AS {CRASH_RATE_ALERT_SESSION_COUNT_ALIAS}"]
        functions_acl = ["identity"]
        snuba_filter = get_filter(query, params=params)
        snuba_filter.update_with(
            resolve_field_list(
                aggregations, snuba_filter, auto_fields=False, functions_acl=functions_acl
            )
        )
        snuba_filter = resolve_snuba_aliases(snuba_filter, resolve_func)[0]
        if environment:
            snuba_filter.conditions.append(["environment", "=", environment.name])
        return snuba_filter

    def get_entity_extra_params(self) -> Mapping[str, Any]:
        return {"organization": self.org_id}


class MetricsCountersEntitySubscription(BaseEntitySubscription):
    dataset = Dataset.Metrics.value
    entity_key = EntityKey.MetricsCounters.value

    def __init__(self, aggregate: str, extra_fields: Optional[Mapping[str, Any]] = None):
        super().__init__(aggregate, extra_fields)
        self.aggregate = aggregate
        if not extra_fields or "org_id" not in extra_fields:
            raise InvalidQuerySubscription(
                "org_id is a required param when "
                "building snuba filter for a metrics subscription"
            )
        self.org_id = extra_fields["org_id"]

    def get_query_groupby(self) -> List[str]:
        session_status = tag_key(self.org_id, "session.status")
        return ["project_id", session_status]

    def build_snuba_filter(
        self,
        query: str,
        environment: Optional[Environment],
        params: Optional[Mapping[str, Any]] = None,
    ) -> Filter:
        snuba_filter = get_filter(query, params=params)
        conditions = copy(snuba_filter.conditions)
        snuba_filter.update_with(
            {
                "aggregations": [["sum(value)", None, "value"]],
                "conditions": conditions + [["metric_id", "=", metric_id(self.org_id, "session")]],
                "groupby": self.get_query_groupby(),
            }
        )
        if environment:
            snuba_filter.conditions.append(["environment", "=", environment.name])
        return snuba_filter

    def get_entity_extra_params(self) -> Mapping[str, Any]:
        return {"organization": self.org_id, "groupby": self.get_query_groupby()}


EntitySubscription = Union[
    EventsEntitySubscription,
    MetricsCountersEntitySubscription,
    TransactionsEntitySubscription,
    SessionsEntitySubscription,
]
ENTITY_KEY_TO_ENTITY_SUBSCRIPTION: Mapping[EntityKey, Type[EntitySubscription]] = {
    EntityKey.Events: EventsEntitySubscription,
    EntityKey.MetricsCounters: MetricsCountersEntitySubscription,
    EntityKey.Sessions: SessionsEntitySubscription,
    EntityKey.Transactions: TransactionsEntitySubscription,
}


def get_entity_subscription_for_dataset(
    dataset: QueryDatasets, aggregate: str, extra_fields: Optional[Mapping[str, Any]] = None
) -> EntitySubscription:
    """
    Function that routes to the correct instance of `EntitySubscription` based on the dataset,
    additionally does validation on aggregate for datasets like the sessions dataset and the
    metrics datasets then returns the instance of `EntitySubscription`
    """
    return ENTITY_KEY_TO_ENTITY_SUBSCRIPTION[map_aggregate_to_entity_key(dataset, aggregate)](
        aggregate, extra_fields
    )


def map_aggregate_to_entity_key(dataset: QueryDatasets, aggregate: str) -> Optional[EntityKey]:
    entity_key = None
    try:
        entity_key = {
            QueryDatasets.EVENTS: EntityKey.Events,
            QueryDatasets.TRANSACTIONS: EntityKey.Transactions,
        }[dataset]
    # If we get to this, then dataset must be either the metrics or the sessions datasets
    except KeyError:
        match = re.match(CRASH_RATE_ALERT_AGGREGATE_RE, aggregate)
        if not match:
            raise UnsupportedQuerySubscription(
                f"Only crash free percentage queries are supported for subscriptions"
                f"over the {dataset.value} dataset"
            )
        if dataset == QueryDatasets.METRICS:
            count_col_matched = match.group(2)
            if count_col_matched == "sessions":
                entity_key = EntityKey.MetricsCounters
            else:
                raise UnsupportedQuerySubscription(
                    "Crash Free Users subscriptions are not supported yet"
                )
        elif dataset == QueryDatasets.SESSIONS:
            entity_key = EntityKey.Sessions
    return entity_key
