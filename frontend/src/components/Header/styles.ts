import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants';
import { StyleTypes } from './types';

export const styles = StyleSheet.create<StyleTypes>({
  header: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.HEADER,
    fontWeight: '700',
  },
});
