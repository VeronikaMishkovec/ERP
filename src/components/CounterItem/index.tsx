import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useStopwatch } from 'react-timer-hook';
import { COLORS } from '../../constants';
import { Pause, Play, Reset } from '../../icons';
import { styles } from './styles';

export const CounterItem: FC = () => {
  const { hours, minutes, pause, reset, seconds, start } = useStopwatch({
    autoStart: false,
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Working Time</Text>
        <Text style={styles.label}>
          {hours}h {minutes}m {seconds}s
        </Text>
      </View>
      <View style={styles.innerView}>
        <Pressable onPress={start} style={styles.pressableIcon}>
          <Play color={COLORS.WHITE} height={'30'} width={'30'} />
        </Pressable>
        <Pressable onPress={pause} style={styles.pressableIcon}>
          <Pause color={COLORS.WHITE} height={'30'} width={'30'} />
        </Pressable>
        <Pressable onPress={reset} style={styles.pressableIcon}>
          <Reset color={COLORS.WHITE} height={'30'} width={'30'} />
        </Pressable>
      </View>
    </>
  );
};
