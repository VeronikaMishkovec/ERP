import { TextStyle, ViewStyle } from 'react-native';

export type StylesTypes = {
  container: ViewStyle;
  header: TextStyle;
  input: ViewStyle;
  label: TextStyle;
  passwordContainer: ViewStyle;
  passwordInput: TextStyle;
};

export type RootProps = {
  color: string;
  header: string;
  height: string;
  label: string;
  onPress(): void;
  width: string;
};
