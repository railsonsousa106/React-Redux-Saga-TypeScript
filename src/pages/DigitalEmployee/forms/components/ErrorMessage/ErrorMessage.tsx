import React from 'react';
import { capitalize } from 'lodash';
import { Wrapper } from './ErrorMessage.style';
import { useSelector } from 'react-redux';
import { selectDigitalEmployeeUI } from '../../../../../redux/digitalEmployee/selectors';

const ErrorMessage: React.FC = () => {
  const { errorMessage } = useSelector(selectDigitalEmployeeUI);

  if (!errorMessage) {
    return null;
  }

  return <Wrapper>{capitalize(errorMessage)}</Wrapper>;
};

export default ErrorMessage;
export { ErrorMessage };
