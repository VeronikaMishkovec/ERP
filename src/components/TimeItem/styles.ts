import { StyleSheet } from 'react-native';
import { StyleProps } from './types';
import { COLORS, FONT_SIZE } from '../../constants';

export const styles = StyleSheet.create<StyleProps>({
  innerView: {
    alignItems: 'center',
    flexGrow: 1,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.HEADER,
    fontWeight: '700',
  },
});
