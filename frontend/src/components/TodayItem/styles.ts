import { StyleSheet } from 'react-native';
import { StyleProps } from './types';
import { COLORS, FONT_SIZE, PADDINGS } from '../../constants';

export const styles = StyleSheet.create<StyleProps>({
  day: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.DAY,
    fontWeight: '700',
    paddingVertical: PADDINGS.INPUT,
  },
  innerView: {
    alignItems: 'center',
    flexGrow: 1,
  },
  label: {
    color: COLORS.WHITE,
  },
  month: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.MONTH,
  },
  weekday: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.WEEKDAY,
  },
});
