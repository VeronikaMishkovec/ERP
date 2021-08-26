import { StyleSheet } from 'react-native';
import { COLORS, PADDINGS, RADIUS } from '../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: COLORS.SWAMP,
    flex: 1,
    paddingHorizontal: PADDINGS.ROOT,
  },
  menuBox: {
    borderColor: COLORS.CAPER,
    borderRadius: RADIUS.BORDERS,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: PADDINGS.ROOT,
  },
});
