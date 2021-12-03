import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconCreditCard = React.forwardRef(function IconCreditCard(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M13.25 14H2.75A2.75 2.75 0 0 1 0 11.25v-6.5A2.75 2.75 0 0 1 2.75 2h10.5A2.75 2.75 0 0 1 16 4.75v6.5A2.75 2.75 0 0 1 13.25 14ZM2.75 3.5A1.25 1.25 0 0 0 1.5 4.75v6.5a1.25 1.25 0 0 0 1.25 1.25h10.5a1.25 1.25 0 0 0 1.25-1.25v-6.5a1.25 1.25 0 0 0-1.25-1.25H2.75Z" />
      <path d="M15.25 5.57H.75v1.5h14.5v-1.5Z" />
    </SvgIcon>
  );
});

IconCreditCard.displayName = 'IconCreditCard';

export {IconCreditCard};
