import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <G fill={props.fill || '#FFF'}>
      <Path d="M10.57 0C4.74 0 0 4.741 0 10.57c0 5.827 4.741 10.568 10.57 10.568 5.827 0 10.568-4.74 10.568-10.569C21.138 4.741 16.398 0 10.57 0zm0 19.187c-4.753 0-8.619-3.866-8.619-8.618 0-4.752 3.866-8.618 8.618-8.618 4.752 0 8.618 3.866 8.618 8.618 0 4.752-3.866 8.618-8.618 8.618z" />
      <Path d="m23.714 22.335-5.593-5.594a.975.975 0 1 0-1.38 1.38l5.594 5.593a.972.972 0 0 0 1.38 0 .975.975 0 0 0 0-1.38z" />
    </G>
  </Svg>
);

export default SvgComponent;
