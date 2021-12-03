import * as React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const IconPlanet = React.forwardRef(function IconPlanet(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M7.934 15.8c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9-3.5 7.9-7.9 7.9Zm0-14.3c-3.5 0-6.4 2.9-6.4 6.4 0 3.5 2.9 6.4 6.4 6.4 3.5 0 6.4-2.9 6.4-6.4 0-3.5-2.8-6.4-6.4-6.4Z" />
      <path d="M1.134 15.9c-.3 0-.6-.1-.8-.3-.7-.7-.3-1.9 1.2-4l1.2.9c-.6.9-.9 1.5-1.1 1.8 1.1-.5 3.6-2.2 7-5.6 3.4-3.4 5.2-6 5.6-7-.3.2-.9.5-1.8 1.1l-.9-1.2c2.1-1.5 3.3-1.9 4-1.2.7.7.3 1.8-1.1 3.9-1.1 1.6-2.8 3.6-4.8 5.5s-3.9 3.6-5.5 4.8c-1.3.8-2.3 1.3-3 1.3Z" />
    </SvgIcon>
  );
});

IconPlanet.displayName = 'IconPlanet';

export {IconPlanet};
