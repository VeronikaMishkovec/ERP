import { RootProps, StylesTypes } from '../../rootTypes';

export type StyleTypes = Pick<
  StylesTypes,
  'container' | 'input' | 'label' | 'passwordContainer' | 'passwordInput'
>;

export type Props = Pick<RootProps, 'label' | 'onChange' | 'value'> & {
  password?: boolean;
  visible?: boolean;
};

export type ViewProps = Props & { onPress(): void };
