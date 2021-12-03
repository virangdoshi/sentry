import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconText = React.forwardRef(function IconText(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M13.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v10.5A2.75 2.75 0 0 1 13.25 16ZM2.75 1.5A1.25 1.25 0 0 0 1.5 2.75v10.5a1.25 1.25 0 0 0 1.25 1.25h10.5a1.25 1.25 0 0 0 1.25-1.25V2.75a1.25 1.25 0 0 0-1.25-1.25H2.75Z" />
      <path d="M12.33 5.52a.75.75 0 0 1-.75-.75v-.44H4.42v.44a.75.75 0 0 1-1.5 0V3.58a.76.76 0 0 1 .75-.75h8.66a.76.76 0 0 1 .75.75v1.19a.76.76 0 0 1-.75.75Z" />
      <path d="M8.75 3.58h-1.5v8.83h1.5V3.58Z" />
      <path d="M9 13.17H7a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Z" />
    </SvgIcon>
  );
});

IconText.displayName = 'IconText';

export {IconText};
