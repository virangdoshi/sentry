import {useCallback, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Fuse from 'fuse.js';
import debounce from 'lodash/debounce';

import TextField from 'app/components/forms/textField';
import space from 'app/styles/space';

import {IconData, iconGroups, IconPropName, iconProps, icons} from './data';
import IconInfoBox from './infoBox';

export type ExtendedIconData = IconData & {
  name: string;
  defaultProps?: Partial<Record<IconPropName, unknown>>;
};

type Results = {id: string; label?: string; icons: ExtendedIconData[]}[];

export type SelectedIcon = {
  group: string;
  icon: string;
};

const SearchPanel = () => {
  /**
   * The same icon can appear in multiple groups,
   * so we also need to store which group the
   * selected icon is in.
   */
  const [selectedIcon, setSelectedIcon] = useState<SelectedIcon>({group: '', icon: ''});

  /**
   * Parse icon name from id and attach it to the icon object.
   */
  const addIconNames = (iconArr: IconData[]): ExtendedIconData[] =>
    iconArr.map(icon => {
      const name = icon.id.charAt(0).toUpperCase() + icon.id.slice(1);
      return {...icon, name};
    });

  /**
   * For displaying the same icon in multiple configurations,
   * e.g. displaying IconChevron in all four orientations (left,
   * right, up down). Duplicates icons, returning copies of the same
   * objects but with different props.
   */
  const enumerateIconProp = (
    iconArr: ExtendedIconData[],
    prop: string
  ): ExtendedIconData[] =>
    iconArr.reduce((acc: ExtendedIconData[], cur: ExtendedIconData) => {
      const propData = iconProps[prop];

      switch (propData.type) {
        case 'select':
          const availableOptions: string[][] =
            cur.limitOptions?.[prop] ?? propData.options;

          return [
            ...acc,
            ...availableOptions.map(option => ({
              ...cur,
              id: `${cur.id}-${prop}-${option[0]}`,
              defaultProps: {
                ...cur.defaultProps,
                [prop]: option[0],
              },
            })),
          ];
        case 'boolean':
          return [
            ...acc,
            {...cur, defaultProps: {...cur.defaultProps, [prop]: false}},
            {
              ...cur,
              id: `${cur.id}-${prop}`,
              defaultProps: {...cur.defaultProps, [prop]: true},
            },
          ];
        default:
          return acc;
      }
    }, []);

  /**
   * Applies enumerateIconProp to all icons and all applicable props.
   */
  const enumerateAllIconProps = (iconArr: ExtendedIconData[]): ExtendedIconData[] =>
    iconArr.reduce((acc: ExtendedIconData[], cur: ExtendedIconData) => {
      let iconVariants: ExtendedIconData[] = [{...cur, defaultProps: {}}];

      cur.additionalProps?.forEach(prop => {
        if (iconProps[prop].enumerate) {
          iconVariants = enumerateIconProp(iconVariants, prop);
        }
      });

      return [...acc, ...iconVariants];
    }, []);

  const groupedIcons: Results = iconGroups.map(group => {
    const filteredIcons = icons.filter(i => i.groups.includes(group.id));
    const namedIcons = addIconNames(filteredIcons);
    const enumeratedIcons = enumerateAllIconProps(namedIcons);

    return {...group, icons: enumeratedIcons};
  });

  /**
   * Fuse.js for fuzzy icon search
   */
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Results>(groupedIcons);
  const fuse = new Fuse(icons, {
    keys: [
      {
        name: 'id',
        weight: 0.6,
      },
      {
        name: 'groups',
        weight: 0.2,
      },
      {
        name: 'keywords',
        weight: 0.2,
      },
    ],
  });
  const debouncedSearch = useCallback(
    debounce(newQuery => {
      if (!newQuery) {
        setResults(groupedIcons);
      } else {
        const searchResults = fuse.search(newQuery, {limit: 5});
        const namedIcons = addIconNames(searchResults);
        const enumeratedIcons = enumerateAllIconProps(namedIcons);

        setResults([{id: 'search', icons: enumeratedIcons}]);
      }
    }, 250),
    []
  );
  useEffect(() => {
    debouncedSearch(query);
  }, [query]);

  return (
    <Wrap>
      <TextField
        name="query"
        placeholder="Search icons"
        value={query}
        onChange={value => {
          setQuery(value as string);
          setSelectedIcon({group: '', icon: ''});
        }}
      />

      {results.map(group => (
        <GroupWrap key={group.id}>
          <GroupLabel>{group.label}</GroupLabel>
          <GroupIcons>
            {group.icons.map(icon => (
              <IconInfoBox
                key={icon.id}
                icon={icon}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
                groupId={group.id}
              />
            ))}
          </GroupIcons>
        </GroupWrap>
      ))}
    </Wrap>
  );
};

export default SearchPanel;

export const Wrap = styled('div')`
  margin-top: ${space(4)};
`;

const GroupWrap = styled('div')`
  margin: ${space(4)} 0;
`;

const GroupLabel = styled('p')`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0;
`;

const GroupIcons = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  margin-top: ${space(1)};
`;
