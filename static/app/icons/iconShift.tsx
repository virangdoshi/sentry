import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconShift = React.forwardRef(function IconShift(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M11.58 15.855H4.36a.75.75 0 0 1-.75-.75v-6.06H.75a.73.73 0 0 1-.68-.46.75.75 0 0 1 .14-.81L7.43.225a.76.76 0 0 1 1.08 0l7.22 7.55a.75.75 0 0 1 .14.81.73.73 0 0 1-.68.46h-2.86v6.06a.75.75 0 0 1-.75.75Zm-6.47-1.5h5.72v-6.06a.741.741 0 0 1 .75-.75h1.85l-5.46-5.72-5.46 5.72h1.85a.74.74 0 0 1 .75.75v6.06Z" />
    </SvgIcon>
  );
});

IconShift.displayName = 'IconShift';

export {IconShift};
