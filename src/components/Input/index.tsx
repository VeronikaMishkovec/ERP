import React, { FC, useState } from 'react';
import { InputView } from './InputView';

import { Props } from './types';

export const Input: FC<Props> = ({ label, onChange, password, value }) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleVisible = () => setVisible(!isVisible);

  return (
    <InputView
      label={label}
      onChange={onChange}
      onPress={handleVisible}
      password={password}
      value={value}
      visible={isVisible}
    />
  );
};
