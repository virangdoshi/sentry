import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconUnlock = React.forwardRef(function IconUnlock(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M4.5 7.94a.75.75 0 0 1-.75-.75V4.34a4.34 4.34 0 1 1 8.67 0 .75.75 0 1 1-1.5 0 2.84 2.84 0 1 0-5.67 0v2.85a.76.76 0 0 1-.75.75Z" />
      <path d="M14.72 16H1.44a.76.76 0 0 1-.75-.75V7.19a.75.75 0 0 1 .75-.75h13.28a.75.75 0 0 1 .75.75v8.06a.76.76 0 0 1-.75.75ZM2.19 14.5H14V7.94H2.19v6.56Z" />
      <path d="M8.08 12.94a.76.76 0 0 1-.75-.75v-2.14a.75.75 0 0 1 1.5 0v2.14a.75.75 0 0 1-.75.75Z" />
    </SvgIcon>
  );
});

IconUnlock.displayName = 'IconUnlock';

export {IconUnlock};
