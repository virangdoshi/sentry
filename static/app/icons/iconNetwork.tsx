import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconNetwork = React.forwardRef(function IconNetwork(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M13 5.78a2.86 2.86 0 1 1 .08-5.72A2.86 2.86 0 0 1 13 5.78Zm0-4.21a1.36 1.36 0 1 0 .08 2.719A1.36 1.36 0 0 0 13 1.57ZM3 10.86A2.86 2.86 0 1 1 5.82 8 2.87 2.87 0 0 1 3 10.86Zm0-4.22a1.36 1.36 0 1 0-.08 2.72A1.36 1.36 0 0 0 3 6.64ZM13 15.93a2.86 2.86 0 1 1 0-5.72 2.86 2.86 0 0 1 0 5.72Zm0-4.21a1.36 1.36 0 1 0 0 2.718 1.36 1.36 0 0 0 0-2.718Z" />
      <path d="M11.16 12.88a.84.84 0 0 1-.34-.08L4.5 9.62a.751.751 0 0 1 .68-1.34l6.32 3.18a.75.75 0 0 1-.34 1.42ZM4.84 7.8a.75.75 0 0 1-.34-1.42l6.32-3.18a.76.76 0 0 1 1 .33.75.75 0 0 1-.33 1L5.18 7.72a.71.71 0 0 1-.34.08Z" />
    </SvgIcon>
  );
});

IconNetwork.displayName = 'IconNetwork';

export {IconNetwork};
