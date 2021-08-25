import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button, Header, Input } from '../../components';
import { HEADERS, LABELS } from '../../constants';
import { styles } from './styles';

export const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header header={HEADERS.LOGIN} />
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Input label={LABELS.EMAIL} />
        <Input label={LABELS.PASSWORD} password={true} />
      </KeyboardAvoidingView>
      <Button label={LABELS.LOGIN} />
    </SafeAreaView>
  );
};
