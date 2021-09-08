import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, PADDINGS } from '../../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: COLORS.TOLOPEA,
    padding: PADDINGS.ROOT,
  },
  header: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SUBHEADER,
    fontWeight: '700',
  },
  innerView: {
    marginVertical: PADDINGS.INPUT,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.LABEL,
  },
});
