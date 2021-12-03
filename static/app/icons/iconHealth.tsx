import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconHealth = React.forwardRef(function IconHealth(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M10.33 15.05a1.25 1.25 0 0 1-1.21-.9L5.87 2.85 4.29 8.18a.76.76 0 0 1-.72.54H.79a.75.75 0 1 1 0-1.5H3L4.67 1.6a1.24 1.24 0 0 1 2.39.01l3.25 11.27 1.4-5.11a.75.75 0 0 1 .72-.55h2.81a.75.75 0 1 1 0 1.5H13l-1.49 5.41a1.23 1.23 0 0 1-1.2.92h.02Z" />
    </SvgIcon>
  );
});

IconHealth.displayName = 'IconHealth';

export {IconHealth};
