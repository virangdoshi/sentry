import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconColumn = React.forwardRef(function IconColumn(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M6.026 16H1.87C.831 16 0 15.2 0 14.2V1.8C.104.8.935 0 1.974 0H6.13C7.169 0 8 .8 8 1.8v12.5c-.104.9-.935 1.7-1.974 1.7ZM1.974 1.5c-.104 0-.208.1-.208.2v12.5c0 .1.104.2.208.2H6.13c.104 0 .208-.1.208-.2V1.8c0-.1-.104-.2-.208-.2H1.974v-.1ZM14.2 16h-3.9c-1 0-1.8-.8-1.8-1.8V1.8c0-1 .8-1.8 1.8-1.8h3.9c1 0 1.8.8 1.8 1.8v12.5c0 .9-.8 1.7-1.8 1.7ZM10.4 1.5c-.1 0-.2.1-.2.2v12.5c0 .1.1.2.2.2h3.8c.1 0 .2-.1.2-.2V1.8c0-.1-.1-.2-.2-.2h-3.8v-.1Z" />
    </SvgIcon>
  );
});

IconColumn.displayName = 'IconColumn';

export {IconColumn};
