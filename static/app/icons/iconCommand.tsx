import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconCommand = React.forwardRef(function IconCommand(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M12.75 15.86a3.15 3.15 0 0 1-3.15-3.15v-1.65H6.3v1.65a3.15 3.15 0 1 1-6.3 0 3.16 3.16 0 0 1 3.15-3.15H4.8V6.3H3.15A3.16 3.16 0 0 1 0 3.15a3.15 3.15 0 1 1 6.3 0V4.8h3.3V3.15A3.15 3.15 0 0 1 12.75 0a3.15 3.15 0 0 1 3.2 3.15 3.16 3.16 0 0 1-3.2 3.15H11.1v3.26h1.65a3.16 3.16 0 0 1 3.2 3.15 3.151 3.151 0 0 1-3.2 3.15Zm-1.65-4.8v1.65a1.65 1.65 0 0 0 3.3 0 1.66 1.66 0 0 0-1.65-1.65H11.1Zm-7.95 0a1.66 1.66 0 0 0-1.65 1.65 1.65 1.65 0 1 0 3.3 0v-1.65H3.15Zm3.15-1.5h3.3V6.3H6.3v3.26Zm4.8-4.76h1.65a1.66 1.66 0 0 0 1.65-1.65 1.65 1.65 0 0 0-3.3 0V4.8ZM3.15 1.5A1.65 1.65 0 0 0 1.5 3.15 1.66 1.66 0 0 0 3.15 4.8H4.8V3.15A1.65 1.65 0 0 0 3.15 1.5Z" />
    </SvgIcon>
  );
});

IconCommand.displayName = 'IconCommand';

export {IconCommand};
