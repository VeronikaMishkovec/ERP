import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Projects } from '../../stubs';
import { Button } from '..';
import { BUTTON_TYPES } from '../../constants';
import { AddProject } from '../Modal';

export const ProjectsBlock: FC = () => {
  const [isShown, setShown] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Projects</Text>
      {Projects.length > 0 ? (
        <Text style={styles.label}>qwerrty</Text>
      ) : (
        <Text style={styles.text}>List of projects is empty</Text>
      )}
      <Button
        label={'Add new project'}
        onPress={() => setShown(!isShown)}
        type={BUTTON_TYPES.SECONDARY}
      />

      <AddProject visible={isShown} />
    </View>
  );
};
