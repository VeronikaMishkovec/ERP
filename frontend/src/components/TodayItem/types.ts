import { TextStyle } from 'react-native';
import { StylesTypes } from '../../rootTypes';

export type StyleProps = Pick<StylesTypes, 'innerView' | 'label'> & {
  day: TextStyle;
  month: TextStyle;
  weekday: TextStyle;
};
