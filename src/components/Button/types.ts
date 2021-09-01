import { ViewStyle } from 'react-native';
import { RootProps, StylesTypes } from '../../rootTypes';

export type StyleTypes = Pick<StylesTypes, 'container' | 'label'> & {
  secondary: ViewStyle;
};

export type Props = Pick<RootProps, 'children' | 'label' | 'onPress'> & {
  type: string;
};
