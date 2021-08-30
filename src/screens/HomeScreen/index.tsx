import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CounterItem, TimeItem, TodayItem } from '../../components';
import { styles } from './styles';

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuBox}>
        <TodayItem />
        <TimeItem />
      </View>
      <CounterItem />
    </SafeAreaView>
  );
};
