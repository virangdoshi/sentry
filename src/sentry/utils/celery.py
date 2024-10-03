
from celery.schedules import crontab
import secrets


def crontab_with_minute_jitter(*args, **kwargs):
    kwargs["minute"] = secrets.SystemRandom().randint(0, 59)
    return crontab(*args, **kwargs)
