import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconSpaceship = React.forwardRef(function IconSpaceship(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M6.76 16.06A1.86 1.86 0 0 1 5 14.83a27.42 27.42 0 0 1-1.92-8.29C3.08 3.78 5.51.09 8 .09c2.49 0 4.92 3.69 4.92 6.45A27.42 27.42 0 0 1 11 14.83a1.86 1.86 0 0 1-1.74 1.23h-2.5ZM8 1.59c-1.32 0-3.42 2.7-3.42 5a26.19 26.19 0 0 0 1.85 7.79.36.36 0 0 0 .33.23h2.48a.36.36 0 0 0 .33-.23 26.19 26.19 0 0 0 1.85-7.79c0-2.3-2.1-5-3.42-5Z" />
      <path d="M8 8.69a2.15 2.15 0 1 1 0-4.3 2.15 2.15 0 0 1 0 4.3ZM8 5.9a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3ZM1.47 15.35a.76.76 0 0 1-.41-.13.74.74 0 0 1-.34-.65L.8 12a1.7 1.7 0 0 1 .94-1.47L4 9.42l.68 1.33-2.26 1.16a.21.21 0 0 0-.12.17v1.34l2.6-1.17.62 1.37-3.7 1.66a.818.818 0 0 1-.35.07ZM14.53 15.35a.82.82 0 0 1-.31-.07l-3.7-1.66.62-1.37 2.6 1.17v-1.34a.21.21 0 0 0-.12-.17l-2.27-1.16.65-1.33 2.27 1.15A1.7 1.7 0 0 1 15.2 12l.08 2.53a.74.74 0 0 1-.34.65.76.76 0 0 1-.41.17Z" />
    </SvgIcon>
  );
});

IconSpaceship.displayName = 'IconSpaceship';

export {IconSpaceship};
