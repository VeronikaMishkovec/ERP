import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, PADDINGS, RADIUS } from '../../constants';
import { StyleTypes } from './types';

export const styles = StyleSheet.create<StyleTypes>({
  container: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  input: {
    borderColor: COLORS.CHINA_IVORY,
    borderRadius: RADIUS.BORDERS,
    borderStyle: 'solid',
    borderWidth: 1,
    color: COLORS.WHITE,
    padding: PADDINGS.INPUT,
    flexGrow: 1,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.LABEL,
    paddingVertical: PADDINGS.ROOT,
  },
  passwordContainer: {
    alignItems: 'center',
    borderColor: COLORS.CHINA_IVORY,
    borderRadius: RADIUS.BORDERS,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    paddingRight: PADDINGS.INPUT,
    width: '100%',
  },
  passwordInput: {
    color: COLORS.WHITE,
    flexGrow: 1,
    paddingLeft: PADDINGS.INPUT,
    paddingVertical: PADDINGS.INPUT,
  },
});
