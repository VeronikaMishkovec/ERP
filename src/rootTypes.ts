import { TextStyle, ViewStyle } from 'react-native';

export type StylesTypes = {
  container: ViewStyle;
  header: TextStyle;
  input: ViewStyle;
  label: TextStyle;
};

export type RootProps = {
  header: string;
  label: string;
};
