import { StyleSheet } from 'react-native';
import { PADDINGS } from './constants';
import { StylesTypes } from './rootTypes';

type Styles = Pick<StylesTypes, 'container'>;

export const rootStyles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: PADDINGS.ROOT,
  },
});
