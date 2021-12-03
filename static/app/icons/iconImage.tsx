import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconImage = React.forwardRef(function IconImage(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M4.37 7.29a2.06 2.06 0 1 1 2.06-2 2.05 2.05 0 0 1-2.06 2Zm0-2.61a.56.56 0 1 0 0 1.12.56.56 0 0 0 0-1.12ZM15 13.46a.749.749 0 0 1-.56-.25L10 8.16l-3 3.18a.75.75 0 0 1-1 .05l-1.48-1.32-3 3.16a.75.75 0 0 1-1.1-1l3.5-3.72a.75.75 0 0 1 1 0l1.53 1.27 3-3.25a.85.85 0 0 1 .55-.24.75.75 0 0 1 .56.25l5 5.68a.75.75 0 0 1-.56 1.24Z" />
      <path d="M13.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v10.5A2.75 2.75 0 0 1 13.25 16ZM2.75 1.5A1.25 1.25 0 0 0 1.5 2.75v10.5a1.25 1.25 0 0 0 1.25 1.25h10.5a1.25 1.25 0 0 0 1.25-1.25V2.75a1.25 1.25 0 0 0-1.25-1.25H2.75Z" />
    </SvgIcon>
  );
});

IconImage.displayName = 'IconImage';

export {IconImage};
