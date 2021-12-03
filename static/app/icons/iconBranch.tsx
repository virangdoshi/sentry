import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconBranch = React.forwardRef(function IconBranch(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M2.84 6.71a2.86 2.86 0 1 1 0-5.72 2.86 2.86 0 0 1 0 5.72Zm0-4.21a1.36 1.36 0 1 0 0 2.72 1.36 1.36 0 0 0 0-2.72ZM2.84 15a2.86 2.86 0 1 1 0-5.72 2.86 2.86 0 0 1 0 5.72Zm0-4.21a1.36 1.36 0 1 0 1.36 1.35 1.35 1.35 0 0 0-1.36-1.35ZM13.16 6.71a2.86 2.86 0 1 1-.04-5.72 2.86 2.86 0 0 1 .04 5.72Zm0-4.21a1.36 1.36 0 1 0-.02 2.72 1.36 1.36 0 0 0 .02-2.72Z" />
      <path d="M11.05 4.61H5a.75.75 0 0 1 0-1.5h6.1a.75.75 0 1 1 0 1.5h-.05ZM7.16 12.89H5a.75.75 0 1 1 0-1.5h2.16a5.26 5.26 0 0 0 5.25-5.25V6a.75.75 0 1 1 1.5 0v.18a6.76 6.76 0 0 1-6.75 6.71Z" />
    </SvgIcon>
  );
});

IconBranch.displayName = 'IconBranch';

export {IconBranch};
