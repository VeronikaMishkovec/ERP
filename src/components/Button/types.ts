import { RootProps, StylesTypes } from '../../rootTypes';

export type StyleTypes = Pick<StylesTypes, 'container' | 'label'>;

export type Props = Pick<RootProps, 'children' | 'label' | 'onPress'>;
