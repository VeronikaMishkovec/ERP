import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from './src/constants';
import { LoginScreen } from './src/screens';

const style = StyleSheet.create({
  root: {
    backgroundColor: COLORS.SWAMP,
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={style.root}>
      <StatusBar barStyle={'light-content'} />
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
