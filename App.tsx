import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from './src/constants';
import { Navigation } from './src/navigation';

const style = StyleSheet.create({
  root: {
    backgroundColor: COLORS.TOLOPEA,
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={style.root}>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
