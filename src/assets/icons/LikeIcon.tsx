import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path
      d="M21.79 6.398C21.79 2.88 19.308 0 15.872 0c-2.426 0-4.083 1.207-4.978 2.103C9.999 1.207 8.342 0 5.916 0 2.482 0 0 2.879 0 6.398c0 1.84.709 3.539 2.23 5.35 1.334 1.587 3.252 3.223 5.473 5.116.821.701 1.67 1.426 2.574 2.216a.935.935 0 0 0 1.235 0 262.9 262.9 0 0 1 2.575-2.216c2.22-1.893 4.138-3.529 5.472-5.117 1.522-1.81 2.23-3.51 2.23-5.35zm-3.666 4.143c-1.234 1.469-3.008 2.981-5.254 4.897-.637.543-1.291 1.1-1.975 1.694a335.936 335.936 0 0 0-1.976-1.694c-2.246-1.916-4.02-3.428-5.254-4.897-1.238-1.473-1.79-2.751-1.79-4.143 0-2.579 1.737-4.523 4.041-4.523 1.134 0 2.176.36 3.098 1.067a5.227 5.227 0 0 1 1.092 1.118c.026.041-.133-.167 1.955 2.554a.937.937 0 1 0 1.488-1.14l-1.464-1.91c.6-.643 1.868-1.689 3.788-1.689 2.426 0 4.041 2.082 4.041 4.523 0 1.392-.552 2.67-1.79 4.143z"
      fill="#F71E78"
    />
  </Svg>
);

export default SvgComponent;
