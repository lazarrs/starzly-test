import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={14} height={14} {...props}>
    <Path d="M.72 14a.72.72 0 0 1-.509-1.23L12.771.211a.72.72 0 1 1 1.018 1.019L1.229 13.789A.722.722 0 0 1 .72 14z" />
    <Path d="M13.28 14a.715.715 0 0 1-.509-.211L.211 1.229A.72.72 0 0 1 1.23.212l12.559 12.56A.72.72 0 0 1 13.28 14z" />
  </Svg>
);

export default SvgComponent;
