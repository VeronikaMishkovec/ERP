import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({ label, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};
