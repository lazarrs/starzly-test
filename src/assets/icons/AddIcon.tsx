import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <G fill="#F71E78">
      <Path d="M19.714 0H4.286A4.29 4.29 0 0 0 0 4.286v15.428A4.29 4.29 0 0 0 4.286 24h15.428A4.29 4.29 0 0 0 24 19.714V4.286A4.29 4.29 0 0 0 19.714 0zm2.572 19.714a2.571 2.571 0 0 1-2.572 2.572H4.286a2.571 2.571 0 0 1-2.572-2.572V4.286a2.571 2.571 0 0 1 2.572-2.572h15.428a2.571 2.571 0 0 1 2.572 2.572v15.428z" />
      <Path d="M16.286 11.143h-3.429V7.714a.857.857 0 1 0-1.714 0v3.429H7.714a.857.857 0 1 0 0 1.714h3.429v3.429a.857.857 0 1 0 1.714 0v-3.429h3.429a.857.857 0 1 0 0-1.714z" />
    </G>
  </Svg>
);

export default SvgComponent;
