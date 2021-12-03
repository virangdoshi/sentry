import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconGift = React.forwardRef(function IconGift(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M13.27 16H2.75A1.75 1.75 0 0 1 1 14.21v-8.5A.76.76 0 0 1 1.75 5h12.52a.76.76 0 0 1 .75.75v8.5A1.75 1.75 0 0 1 13.27 16ZM2.5 6.46v7.75a.25.25 0 0 0 .25.25h10.52a.25.25 0 0 0 .25-.25V6.46H2.5Z" />
      <path d="M8.75 5.71h-1.5v9.5h1.5v-9.5Z" />
      <path d="M14.22 10.86H1.8a.75.75 0 1 1 0-1.5h12.42a.75.75 0 1 1 0 1.5ZM14.76 6.46h-.49A.75.75 0 0 1 14 5V3.64a.25.25 0 0 0-.25-.25H2.26a.25.25 0 0 0-.26.25V5a.75.75 0 0 1-.26 1.45h-.48a.75.75 0 0 1-.75-.75V3.64a1.75 1.75 0 0 1 1.75-1.75h11.5a1.76 1.76 0 0 1 1.75 1.75v2.07a.75.75 0 0 1-.75.75Z" />
      <path d="M8.76 2.64h-1.5a1.13 1.13 0 0 0-2.26 0H3.51a2.63 2.63 0 0 1 5.25 0Z" />
      <path d="M12.51 2.64H11a1.13 1.13 0 0 0-2.25 0H7.26a2.63 2.63 0 0 1 5.25 0Z" />
    </SvgIcon>
  );
});

IconGift.displayName = 'IconGift';

export {IconGift};
