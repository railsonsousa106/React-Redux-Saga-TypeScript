import React, { FC, ReactElement } from 'react';

import { Wrapper } from './Checkbox.style';

interface Props {
  label: string | ReactElement;
  checked: boolean;
  onChange: React.ChangeEventHandler;
}

const Checkbox: FC<Props> = ({ label, checked, onChange }) => {
  return (
    <Wrapper>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </Wrapper>  
  );
};

export default Checkbox;
export { Checkbox };
