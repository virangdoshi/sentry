import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconRow = React.forwardRef(function IconRow(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M14.3 16H1.8c-1 0-1.8-.8-1.8-1.8v-3.9c0-1 .8-1.8 1.8-1.8h12.5c1 0 1.8.8 1.8 1.8v3.9c-.1 1-.9 1.8-1.8 1.8ZM1.8 10.1c-.1 0-.2.1-.2.2v3.9c0 .1.1.2.2.2h12.5c.1 0 .2-.1.2-.2v-3.9c0-.1-.1-.2-.2-.2H1.8ZM14.3 7.4H1.8C.8 7.4 0 6.6 0 5.6V1.8C0 .8.8 0 1.8 0h12.5c1 0 1.8.8 1.8 1.8v3.9c-.1.9-.9 1.7-1.8 1.7ZM1.8 1.5c-.1 0-.2.1-.2.2v3.9c0 .1.1.2.2.2h12.5c.1 0 .2-.1.2-.2V1.8c0-.1-.1-.2-.2-.2H1.8v-.1Z" />
    </SvgIcon>
  );
});

IconRow.displayName = 'IconRow';

export {IconRow};
