import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button, Header, Input } from '../../components';
import { HEADERS, LABELS } from '../../constants';
import { styles } from './styles';
import { ViewProps } from './types';

export const LoginScreenView: FC<ViewProps> = ({
  email,
  onChangeEmail,
  onChangePassword,
  onPress,
  password,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header header={HEADERS.LOGIN} />
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Input label={LABELS.EMAIL} onChange={onChangeEmail} value={email} />
        <Input
          label={LABELS.PASSWORD}
          onChange={onChangePassword}
          password={true}
          value={password}
        />
      </KeyboardAvoidingView>
      <Button label={LABELS.LOGIN} onPress={onPress} />
    </SafeAreaView>
  );
};
