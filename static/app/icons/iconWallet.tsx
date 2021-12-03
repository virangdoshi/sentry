import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconWallet = React.forwardRef(function IconWallet(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M14 16H1a.75.75 0 0 1-.75-.75V4.71A.76.76 0 0 1 1 4h13a1.75 1.75 0 0 1 1.75 1.75v8.54A1.75 1.75 0 0 1 14 16ZM1.76 14.5H14a.25.25 0 0 0 .25-.25V5.71a.25.25 0 0 0-.25-.25H1.76v9.04Z" />
      <path d="M15 11.82h-3.82a.75.75 0 0 1-.75-.75V8.9a.74.74 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-3.07v.67H15a.75.75 0 0 1 0 1.5ZM1 5.46A.75.75 0 0 1 .78 4L12.68.12a.7.7 0 0 1 .67.11.72.72 0 0 1 .31.6v3.88a.75.75 0 1 1-1.5 0V1.87L1.24 5.43a.91.91 0 0 1-.24.03Z" />
    </SvgIcon>
  );
});

IconWallet.displayName = 'IconWallet';

export {IconWallet};
