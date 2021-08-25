import React, { FC, useState } from 'react';
import { LoginScreenView } from './LoginScreenView';
import auth from '@react-native-firebase/auth';

export const LoginScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handelLogin = () =>
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

  return (
    <LoginScreenView
      email={email}
      onChangeEmail={(userEmail: string) => setEmail(userEmail)}
      onChangePassword={(userPassword: string) => setPassword(userPassword)}
      onPress={handelLogin}
      password={password}
    />
  );
};
