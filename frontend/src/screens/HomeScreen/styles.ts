import { StyleSheet } from 'react-native';
import { COLORS, PADDINGS, RADIUS } from '../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: COLORS.BLACKCURRANT,
    flex: 1,
    paddingHorizontal: PADDINGS.ROOT,
  },
  menuBox: {
    alignItems: 'center',
    borderRadius: RADIUS.MENU,
    flexDirection: 'row',
    padding: PADDINGS.ROOT,
  },
});
