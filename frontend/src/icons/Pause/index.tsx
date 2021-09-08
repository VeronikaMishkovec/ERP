import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const Pause: FC<IconProps> = ({ color, height, width }) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 24 24">
      <Path fill={color} d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </Svg>
  );
};
