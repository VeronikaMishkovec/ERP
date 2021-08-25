import { RootProps, StylesTypes } from '../../rootTypes';

export type StyleTypes = Pick<
  StylesTypes,
  'container' | 'input' | 'label' | 'passwordContainer' | 'passwordInput'
>;

export type Props = Pick<RootProps, 'label' | 'onPress'> & {
  password?: boolean;
  visible?: boolean;
};
