import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconOption = React.forwardRef(function IconOption(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M15.21 14.16h-4.55a.75.75 0 0 1-.67-.4L4.68 3.51h-4A.76.76 0 0 1 0 2.76.76.76 0 0 1 .71 2h4.43a.73.73 0 0 1 .66.41l5.32 10.24h4.09a.75.75 0 0 1 .75.75.74.74 0 0 1-.75.76ZM15.21 3.51H10a.76.76 0 0 1-.75-.75A.76.76 0 0 1 10 2h5.24a.75.75 0 0 1 .76.76.75.75 0 0 1-.79.75Z" />
    </SvgIcon>
  );
});

IconOption.displayName = 'IconOption';

export {IconOption};
