import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={16} height={16} {...props}>
    <Path
      d="M6.942.557 5.044 4.694l-4.247.665C.035 5.478-.27 6.487.282 7.065l3.073 3.218-.727 4.547c-.13.822.674 1.437 1.349 1.053l3.799-2.147 3.8 2.147c.674.381 1.479-.231 1.348-1.053l-.727-4.547 3.073-3.218c.552-.578.247-1.587-.514-1.706l-4.247-.665L8.61.557c-.34-.738-1.325-.747-1.668 0z"
      fill="#F86B1C"
    />
  </Svg>
);

export default SvgComponent;
