import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconBackspace = React.forwardRef(function IconBackspace(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M15.264 13.46h-9.7a.728.728 0 0 1-.54-.23l-4.84-5a.77.77 0 0 1 0-1l4.84-5a.73.73 0 0 1 .54-.23h9.7a.75.75 0 0 1 .73.68v10a.75.75 0 0 1-.73.78Zm-9.38-1.5h8.63V3.4h-8.63l-4.12 4.28 4.12 4.28Z" />
      <path d="M11.995 11.25a.75.75 0 0 1-.53-.22l-5.47-5.46a.74.74 0 0 1 0-1.06.74.74 0 0 1 1.06 0l5.46 5.46a.75.75 0 0 1 0 1.06.79.79 0 0 1-.52.22Z" />
      <path d="M6.505 11.25a.75.75 0 0 1-.53-.22.741.741 0 0 1 0-1.06l5.46-5.46a.74.74 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-5.5 5.46a.79.79 0 0 1-.49.22Z" />
    </SvgIcon>
  );
});

IconBackspace.displayName = 'IconBackspace';

export {IconBackspace};
