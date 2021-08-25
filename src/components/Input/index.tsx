import React, { FC, useState } from 'react';
import { InputView } from './InputView';

import { Props } from './types';

export const Input: FC<Props> = ({ label, password }) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleVisible = () => setVisible(!isVisible);

  return (
    <InputView
      label={label}
      onPress={handleVisible}
      password={password}
      visible={isVisible}
    />
  );
};
