import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconHome = React.forwardRef(function IconHome(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M10.85 15.13h-1.5V9.74a.25.25 0 0 0-.25-.25h-2a.25.25 0 0 0-.25.25v5.39H5.39V9.74A1.76 1.76 0 0 1 7.14 8h2a1.75 1.75 0 0 1 1.75 1.75l-.04 5.38Z" />
      <path d="M12.33 15.88H3.67a1.75 1.75 0 0 1-1.75-1.75v-5.2H1.8A1.77 1.77 0 0 1 0 7.16a1.74 1.74 0 0 1 .7-1.38h.06L6.9.79a1.77 1.77 0 0 1 2.2 0l6.14 4.94h.06a1.741 1.741 0 0 1 .7 1.43 1.77 1.77 0 0 1-1.8 1.77h-.12v5.2a1.75 1.75 0 0 1-1.75 1.75ZM1.6 7a.3.3 0 0 0-.07.18.27.27 0 0 0 .27.27h.87a.74.74 0 0 1 .75.75v6a.25.25 0 0 0 .25.25h8.66a.25.25 0 0 0 .25-.25v-6a.741.741 0 0 1 .75-.75h.87a.27.27 0 0 0 .27-.27.3.3 0 0 0-.07-.18L8.16 2a.24.24 0 0 0-.32 0l-6.2 5H1.6Z" />
    </SvgIcon>
  );
});

IconHome.displayName = 'IconHome';

export {IconHome};
