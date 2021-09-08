import { StyleSheet } from 'react-native';
import { StyleProps } from './types';
import { COLORS, FONT_SIZE, MARGINS } from '../../constants';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SUBHEADER,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: MARGINS.TIMER_CONTROLS,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SUBHEADER,
  },
  pressableIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});
