import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import moment from 'moment';

export const TodayItem: FC = () => {
  const month = moment(new Date()).format('MMMM');
  const day = moment(new Date()).format('DD');
  const weekday = moment(new Date()).format('dddd');

  return (
    <View style={styles.innerView}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.weekday}>{weekday}</Text>
    </View>
  );
};
