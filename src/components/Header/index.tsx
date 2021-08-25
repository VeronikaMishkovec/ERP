import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';

export const Header: FC<Props> = ({ header }) => {
  return <Text style={styles.header}>{header}</Text>;
};
