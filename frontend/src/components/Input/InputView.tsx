import React, { FC } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../constants';
import { Eye, EyeOff } from '../../icons';
import { styles } from './styles';
import { ViewProps } from './types';

export const InputView: FC<ViewProps> = ({
  label,
  onChange,
  onPress,
  password,
  value,
  visible,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {password ? (
        <View style={styles.passwordContainer}>
          <TextInput
            onChangeText={onChange}
            secureTextEntry={visible}
            style={styles.passwordInput}
            value={value}
          />
          {visible ? (
            <Pressable onPress={onPress}>
              <Eye color={COLORS.CHINA_IVORY} height={'24px'} width={'24px'} />
            </Pressable>
          ) : (
            <Pressable onPress={onPress}>
              <EyeOff
                color={COLORS.CHINA_IVORY}
                height={'24px'}
                width={'24px'}
              />
            </Pressable>
          )}
        </View>
      ) : (
        <TextInput
          onChangeText={onChange}
          secureTextEntry={false}
          style={styles.input}
          value={value}
        />
      )}
    </View>
  );
};
