import * as React from 'react';
import Svg, {SvgProps, G, Path, Circle} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <G fill="#FFF">
      <Path d="m23.977 22.87-1.541-5.016a11.985 11.985 0 1 0-4.075 4.28l4.443 1.781a.856.856 0 0 0 .856-.162.856.856 0 0 0 .317-.882zm-3.288-4.887 1.105 3.68-3.21-1.283a.856.856 0 0 0-.797.094 10.359 10.359 0 1 1 2.988-3.176.856.856 0 0 0-.086.685z" />
      <Circle cx={11.991} cy={11.99} r={1.712} />
      <Circle cx={17.984} cy={11.99} r={1.712} />
      <Circle cx={5.999} cy={11.99} r={1.712} />
    </G>
  </Svg>
);

export default SvgComponent;
