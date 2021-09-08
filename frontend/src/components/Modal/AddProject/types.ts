import { RootProps, StylesTypes } from '../../../rootTypes';

export type StyleProps = Pick<
  StylesTypes,
  'container' | 'header' | 'innerView' | 'label'
>;

export type Props = {
  name: RootProps['value'];
  onChangeName: RootProps['onChange'];
  visible: boolean;
};
