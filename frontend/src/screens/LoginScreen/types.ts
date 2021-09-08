import { RootProps, StylesTypes } from '../../rootTypes';

export type StyleProps = Pick<StylesTypes, 'container' | 'keyboardAvoiding'>;

export type ViewProps = Pick<RootProps, 'onPress'> & {
  email: string;
  onChangeEmail: RootProps['onChange'];
  onChangePassword: RootProps['onChange'];
  password: string;
};

export type Props = Pick<RootProps, 'onPress'>;
