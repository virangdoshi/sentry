import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconSend = React.forwardRef(function IconSend(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path d="M10 16a.75.75 0 0 1-.53-.22L.23 6.56A.74.74 0 0 1 0 5.87a.75.75 0 0 1 .5-.55L15 .06a.73.73 0 0 1 .79.17.74.74 0 0 1 .17.79L10.68 15.5a.75.75 0 0 1-.55.47L10 16ZM2.12 6.33l7.55 7.55L14 2 2.12 6.33Z" />
        <path d="M5.37 11.38a.75.75 0 0 1-.54-1.28L14.71.23a.75.75 0 0 1 1.06 1.06L5.9 11.16a.74.74 0 0 1-.53.22Z" />
      </g>
    </SvgIcon>
  );
});

IconSend.displayName = 'IconSend';

export {IconSend};
