import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconFolder = React.forwardRef(function IconFolder(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M15.26 16H.76a.748.748 0 0 1-.76-.74V.76A.74.74 0 0 1 .76 0h4.36a2.75 2.75 0 0 1 1.65.56l1.74 1.31c.218.16.48.247.75.25h6a.76.76 0 0 1 .75.75v12.39a.76.76 0 0 1-.75.74ZM1.51 14.51h13V3.62H9.26a2.75 2.75 0 0 1-1.65-.55L5.87 1.76a1.3 1.3 0 0 0-.75-.25H1.51v13Z" />
    </SvgIcon>
  );
});

IconFolder.displayName = 'IconFolder';

export {IconFolder};
