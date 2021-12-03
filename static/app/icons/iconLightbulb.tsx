import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconLightbulb = React.forwardRef(function IconLightbulb(
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
        <path d="M10.56 16H5.61a.76.76 0 0 1-.74-.61l-.57-2.8a4.52 4.52 0 0 0-.64-1.52 5.17 5.17 0 1 1 9.6-2.68 5.12 5.12 0 0 1-.73 2.61 5.52 5.52 0 0 0-.69 1.63l-.55 2.73a.76.76 0 0 1-.73.64Zm-4.34-1.5h3.72l.43-2.14a7.061 7.061 0 0 1 .87-2.1c.34-.564.52-1.211.52-1.87a3.69 3.69 0 0 0-4.48-3.6A3.62 3.62 0 0 0 4.47 7.7a3.7 3.7 0 0 0 .47 2.59 6 6 0 0 1 .83 2l.45 2.21ZM4 3.45a.75.75 0 0 1-.64-.36l-.8-1.32a.75.75 0 0 1 .24-1 .76.76 0 0 1 1 .24l.85 1.29a.76.76 0 0 1-.24 1 .79.79 0 0 1-.41.15Z" />
        <path d="M2.15 5.94H.77a.75.75 0 0 1 0-1.5h1.38a.75.75 0 0 1 0 1.5ZM8 2.92a.76.76 0 0 1-.75-.75V.77a.75.75 0 0 1 1.5 0v1.4a.76.76 0 0 1-.75.75ZM12 3.45a.79.79 0 0 1-.39-.11.76.76 0 0 1-.24-1L12.16 1a.76.76 0 0 1 1-.24.75.75 0 0 1 .24 1l-.82 1.32a.75.75 0 0 1-.58.37ZM15.23 5.94h-1.38a.75.75 0 1 1 0-1.5h1.38a.75.75 0 1 1 0 1.5Z" />
      </g>
    </SvgIcon>
  );
});

IconLightbulb.displayName = 'IconLightbulb';

export {IconLightbulb};
