import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import moment from 'moment';

export const TodayItem: FC = () => {
  const month = moment(new Date()).format('MMMM');
  const day = moment(new Date()).format('DD');
  const weekday = moment(new Date()).format('dddd');

  return (
    <View>
      <Text style={styles.label}>{month}</Text>
      <Text style={styles.label}>{day}</Text>
      <Text style={styles.label}>{weekday}</Text>
    </View>
  );
};
