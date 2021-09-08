import { StyleSheet } from 'react-native';
import { COLORS, PADDINGS } from '../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.TOLOPEA,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: PADDINGS.ROOT,
  },
  keyboardAvoiding: {
    width: '100%',
  },
});
