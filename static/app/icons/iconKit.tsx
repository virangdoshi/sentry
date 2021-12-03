import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconKit = React.forwardRef(function IconKit(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M14.77 16H1.23A1.25 1.25 0 0 1 0 14.76V3.7a1.25 1.25 0 0 1 1.23-1.25h13.54A1.25 1.25 0 0 1 16 3.7v11.06A1.25 1.25 0 0 1 14.77 16ZM1.48 14.51h13V4h-13v10.51Z" />
      <path d="M15.27 7.77H.73a.75.75 0 0 1 0-1.5h14.54a.75.75 0 0 1 0 1.5ZM11.21 4a.75.75 0 0 1-.7-.46l-.81-2H6.3l-.81 2a.761.761 0 1 1-1.39-.62L5 .78A1.26 1.26 0 0 1 6.13 0h3.74A1.26 1.26 0 0 1 11 .78l.87 2.14a.75.75 0 0 1-.41 1 .69.69 0 0 1-.25.08Z" />
      <path d="M8.94 10.38H7.06a.76.76 0 0 1-.75-.75V7a.75.75 0 0 1 1.5 0v1.88h.38V7a.75.75 0 0 1 1.5 0v2.63a.76.76 0 0 1-.75.75Z" />
    </SvgIcon>
  );
});

IconKit.displayName = 'IconKit';

export {IconKit};
