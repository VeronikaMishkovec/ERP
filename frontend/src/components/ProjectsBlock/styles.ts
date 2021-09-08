import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, MARGINS, PADDINGS } from '../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    marginTop: MARGINS.TIMER_CONTROLS,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SUBHEADER,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.WEEKDAY,
    marginVertical: PADDINGS.INPUT,
  },
});
