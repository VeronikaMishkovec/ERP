import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const Play: FC<IconProps> = ({ color, height, width }) => {
  return (
    <Svg height={height} viewBox="0 0 24 24" width={width}>
      <Path fill={color} d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </Svg>
  );
};
