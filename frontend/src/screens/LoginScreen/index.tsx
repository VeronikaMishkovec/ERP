import React, { FC, useState } from 'react';
import { LoginScreenView } from './LoginScreenView';
import auth from '@react-native-firebase/auth';

export const LoginScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // useEffect(() => {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // }, []);

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

  const handelEmailChange = (userEmail: string) => setEmail(userEmail);

  const handelPasswordChange = (userPassword: string) =>
    setPassword(userPassword);

  return (
    <LoginScreenView
      email={email}
      onChangeEmail={handelEmailChange}
      onChangePassword={handelPasswordChange}
      onPress={handelLogin}
      password={password}
    />
  );
};
