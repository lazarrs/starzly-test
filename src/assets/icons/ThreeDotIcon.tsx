import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 1000 1000" width={24} height={24} {...props}>
    <Path d="M500.1 382.8c-64.7 0-117.2 52.5-117.2 117.2s52.5 117.2 117.2 117.2S617.2 564.7 617.2 500s-52.4-117.2-117.1-117.2zm-372.9 0C62.5 382.8 10 435.3 10 500s52.5 117.2 117.2 117.2S244.3 564.7 244.3 500s-52.4-117.2-117.1-117.2zm745.7 0c-64.7 0-117.2 52.5-117.2 117.2s52.5 117.2 117.2 117.2S990 564.7 990 500s-52.4-117.2-117.1-117.2z" />
  </Svg>
);

export default SvgComponent;
