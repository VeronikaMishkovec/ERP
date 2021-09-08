import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTime } from 'react-timer-hook';
import { styles } from './styles';

export const TimeItem: FC = () => {
  const { minutes, hours } = useTime({ format: undefined });

  return (
    <View style={styles.innerView}>
      <Text style={styles.label}>
        {hours} : {minutes}
      </Text>
    </View>
  );
};
