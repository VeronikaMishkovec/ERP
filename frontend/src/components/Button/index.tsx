import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({ children, label, onPress, type }) => {
  const handelButtonType = () => {
    switch (type) {
      case 'button':
        return styles.container;
      case 'secondary':
        return styles.secondary;
      default:
        return styles.container;
    }
  };

  return (
    <Pressable style={handelButtonType} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </Pressable>
  );
};
