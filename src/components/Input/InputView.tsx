import React, { FC } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../constants';
import { Eye, EyeOff } from '../../icons';
import { styles } from './styles';
import { Props } from './types';

export const InputView: FC<Props> = ({ label, password, onPress, visible }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {password ? (
        <View style={styles.passwordContainer}>
          <TextInput secureTextEntry={visible} style={styles.passwordInput} />
          {visible ? (
            <Pressable onPress={onPress}>
              <Eye color={COLORS.CAPER} height={'24px'} width={'24px'} />
            </Pressable>
          ) : (
            <Pressable onPress={onPress}>
              <EyeOff color={COLORS.CAPER} height={'24px'} width={'24px'} />
            </Pressable>
          )}
        </View>
      ) : (
        <TextInput secureTextEntry={false} style={styles.input} />
      )}
    </View>
  );
};
