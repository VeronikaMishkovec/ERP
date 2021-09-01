import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
  visible: boolean;
};

export const AddProject: FC<Props> = ({ visible }) => {
  return (
    <View>
      <Modal isVisible={visible}>
        <View>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
};
