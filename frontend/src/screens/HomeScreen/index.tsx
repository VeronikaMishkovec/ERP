import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  // CounterItem,
  ProjectsBlock,
  TimeItem,
  TodayItem,
} from '../../components';
import { COLORS } from '../../constants';
import { styles } from './styles';

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.DARK_PURPLE, COLORS.HONEY_FLOWER]}
        style={styles.menuBox}>
        <TodayItem />
        <TimeItem />
      </LinearGradient>
      {/* <CounterItem /> */}
      <ProjectsBlock />
    </SafeAreaView>
  );
};
