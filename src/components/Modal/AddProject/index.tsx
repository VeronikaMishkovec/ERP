import React, { FC, useState } from 'react';
import { AddProjectView } from './AddProjectView';
import { Props } from './types';

export const AddProject: FC<Props> = ({ visible }) => {
  const [name, setName] = useState('');

  return (
    <AddProjectView
      name={name}
      onChangeName={(userName: string) => setName(userName)}
      visible={visible}
    />
  );
};
