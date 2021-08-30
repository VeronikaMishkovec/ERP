import { StyleSheet } from 'react-native';
import { COLORS, PADDINGS } from '../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: COLORS.TOLOPEA,
    flex: 1,
    paddingHorizontal: PADDINGS.ROOT,
  },
  menuBox: {
    flexDirection: 'row',
    padding: PADDINGS.ROOT,
    alignItems: 'center',
  },
});
