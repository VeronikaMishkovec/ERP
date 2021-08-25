import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Props } from './types';

export const Input: FC<Props> = ({ label, password }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={password ? true : false}
        style={styles.input}
      />
    </View>
  );
};
