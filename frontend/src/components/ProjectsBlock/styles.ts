import { StyleSheet } from 'react-native';
import { PADDINGS, RADIUS } from '../../constants';
import { StyleProps } from './types';

export const styles = StyleSheet.create<StyleProps>({
  container: {
    borderRadius: RADIUS.MENU,
    marginVertical: PADDINGS.ROOT,
    padding: PADDINGS.ROOT,
  },
  header: {},
});
