import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const Reset: FC<IconProps> = ({ color, height, width }) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"
      />
    </Svg>
  );
};
