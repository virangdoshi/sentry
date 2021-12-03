import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconHide = React.forwardRef(function IconHide(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M7.9 14.3c-3.7 0-6.2-1.9-7.9-5.9v-.5C1.7 3.9 4.2 2 7.9 2s6.2 1.9 7.9 5.9c.1.2.1.4 0 .6-1.7 4-4.2 5.8-7.9 5.8ZM1.6 8.2C3.1 11.4 5 12.9 8 12.9c3 0 4.9-1.4 6.4-4.7C12.9 5 11 3.5 8 3.5 5 3.5 3 5 1.6 8.2Z" />
      <path d="M7.9 11.8a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" />
      <path d="M1.2 16.025c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l13.5-13.5c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-13.6 13.5c-.1.1-.3.2-.5.2Z" />
    </SvgIcon>
  );
});

IconHide.displayName = 'IconHide';

export {IconHide};
