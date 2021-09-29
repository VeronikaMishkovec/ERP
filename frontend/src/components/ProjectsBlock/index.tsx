import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';

export const ProjectsBlock: FC = () => {

  return (
    <LinearGradient
      angle={55}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={[COLORS.TIDAL, COLORS.HOLLYWOOD_CERISE]}
      style={styles.container}
      useAngle={true}>
      <Text style={styles.header}>Projects</Text>
    </LinearGradient>
  );
};
