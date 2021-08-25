import { RootProps, StylesTypes } from '../../rootTypes';

export type StyleTypes = Pick<StylesTypes, 'container' | 'input' | 'label'>;

export type Props = Pick<RootProps, 'label'> & { password?: boolean };
