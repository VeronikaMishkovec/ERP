import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Input } from '../..';
import { BUTTON_TYPES, HEADERS, LABELS } from '../../../constants';
import { styles } from './styles';
import { Props } from './types';

export const AddProjectView: FC<Props> = ({ name, onChangeName, visible }) => {
  return (
    <View>
      <Modal isVisible={visible}>
        <View style={styles.container}>
          <Text style={styles.header}>{HEADERS.NEW_PROJECT}</Text>
          <Input label={LABELS.NAME} onChange={onChangeName} value={name} />
          <Button
            label={LABELS.SAVE}
            onPress={() => console.log('save')}
            type={BUTTON_TYPES.BUTTON}
          />
        </View>
      </Modal>
    </View>
  );
};
