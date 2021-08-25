import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, PADDINGS, RADIUS } from '../../constants';
import { StyleTypes } from './types';

export const styles = StyleSheet.create<StyleTypes>({
  container: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  input: {
    borderColor: COLORS.CAPER,
    borderRadius: RADIUS.BORDERS,
    borderStyle: 'solid',
    borderWidth: 1,
    color: COLORS.WHITE,
    padding: PADDINGS.INPUT,
    width: '100%',
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.LABEL,
    paddingVertical: PADDINGS.ROOT,
  },
});
