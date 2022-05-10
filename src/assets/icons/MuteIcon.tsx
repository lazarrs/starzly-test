import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

interface Props extends SvgProps {
  muted?: boolean;
}

const SvgComponent = ({muted, ...rest}: Props) => (
  <Svg width={48} height={48} {...rest}>
    <G fill="#FFF" fillRule="nonzero">
      <Path d="M24.955 31.423a.74.74 0 0 0 .449.144.763.763 0 0 0 .35-.082.785.785 0 0 0 .424-.692V16.775a.772.772 0 0 0-1.223-.63l-5.45 3.887h-2.73a.776.776 0 0 0-.775.774v5.956c0 .423.346.774.774.774h2.73l5.45 3.887zm6.818-9.674" />
      {muted && (
        <Path d="M24.955 31.423a.74.74 0 0 0 .449.144.763.763 0 0 0 .35-.082.785.785 0 0 0 .424-.692V16.775a.772.772 0 0 0-1.223-.63l-5.45 3.887h-2.73a.776.776 0 0 0-.775.774v5.956c0 .423.346.774.774.774h2.73l5.45 3.887zm6.818-9.674a.774.774 0 0 0-1.095 0l-.94.94-.94-.94a.774.774 0 1 0-1.095 1.095l.94.94-.94.94a.774.774 0 1 0 1.095 1.095l.94-.94.94.94a.772.772 0 0 0 1.095 0 .774.774 0 0 0 0-1.095l-.94-.94.94-.94a.774.774 0 0 0 0-1.095z" />
      )}
    </G>
  </Svg>
);

export default SvgComponent;
