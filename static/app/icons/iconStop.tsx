import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconStop = React.forwardRef(function IconStop(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M14.52 15.27h-13a.74.74 0 0 1-.75-.75v-13a.74.74 0 0 1 .71-.79h13a.74.74 0 0 1 .75.75v13a.74.74 0 0 1-.71.79Zm-12.29-1.5h11.54V2.23H2.23v11.54Z" />
    </SvgIcon>
  );
});

IconStop.displayName = 'IconStop';

export {IconStop};
