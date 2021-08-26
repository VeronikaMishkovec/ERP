import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TodayItem } from '../../components';
import { styles } from './styles';

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuBox}>
        <TodayItem />
      </View>
    </SafeAreaView>
  );
};
