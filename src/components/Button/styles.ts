import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, MARGINS, SIZES } from '../../constants';
import { StyleTypes } from './types';

export const styles = StyleSheet.create<StyleTypes>({
  container: {
    alignItems: 'center',
    borderColor: COLORS.CAPER,
    borderStyle: 'solid',
    borderWidth: 2,
    height: SIZES.BUTTON_HEIGHT,
    justifyContent: 'center',
    marginTop: MARGINS.BUTTON,
    width: SIZES.BUTTON_WIDTH,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.BUTTON,
    fontWeight: '700',
  },
});
