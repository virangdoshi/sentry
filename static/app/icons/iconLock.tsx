import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconLock = React.forwardRef(function IconLock(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M11.3 8a.67.67 0 0 1-.48-.22.76.76 0 0 1-.2-.52v-2.8A2.95 2.95 0 0 0 9.9 2.4a2.48 2.48 0 0 0-3.81 0 2.82 2.82 0 0 0-.7 2.08v2.8c0 .19-.08.38-.2.51a.67.67 0 0 1-.5.22.67.67 0 0 1-.48-.22.76.76 0 0 1-.2-.52v-2.8a4.51 4.51 0 0 1 1.1-3.14 3.79 3.79 0 0 1 5.8 0 4.3 4.3 0 0 1 1.09 3.15v2.8c0 .19-.08.37-.21.51a.68.68 0 0 1-.49.22Z" />
      <path d="M14.29 16H1.71a.72.72 0 0 1-.71-.7V7.7a.7.7 0 0 1 .71-.7h12.58a.71.71 0 0 1 .71.7v7.6a.71.71 0 0 1-.71.7ZM2.42 14.59h11.19V8.4H2.42v6.18Z" />
      <path d="M8 13c-.26 0-.52-.1-.7-.24a.77.77 0 0 1-.3-.58V9.82c0-.21.1-.42.3-.58.18-.15.43-.24.7-.24.27 0 .52.09.7.24.2.16.3.37.3.58v2.36c0 .21-.1.42-.3.58-.18.15-.43.24-.7.24Z" />
    </SvgIcon>
  );
});

IconLock.displayName = 'IconLock';

export {IconLock};
