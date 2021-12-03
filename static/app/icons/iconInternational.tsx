import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconInternational = React.forwardRef(function IconInternational(
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
        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM8 1.52A6.48 6.48 0 1 0 14.48 8 6.49 6.49 0 0 0 8 1.52Z" />
        <path d="M8 16c-2.34 0-3.56-4-3.56-8S5.66 0 8 0s3.56 4 3.56 8-1.23 8-3.56 8ZM8 1.52C7.18 1.52 5.94 4.1 5.94 8c0 3.9 1.24 6.48 2.06 6.48.82 0 2.06-2.58 2.06-6.48 0-3.9-1.24-6.48-2.06-6.48Z" />
        <path d="M14.94 6.71H1.07a.75.75 0 0 1 0-1.5h13.87a.75.75 0 1 1 0 1.5ZM14.93 10.79H1.06a.75.75 0 1 1 0-1.5h13.87a.75.75 0 0 1 0 1.5Z" />
      </g>
    </SvgIcon>
  );
});

IconInternational.displayName = 'IconInternational';

export {IconInternational};
