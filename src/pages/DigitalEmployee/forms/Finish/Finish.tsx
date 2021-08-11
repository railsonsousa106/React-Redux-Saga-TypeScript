import React, { FC } from 'react';
import { capitalize } from 'lodash';
import DoneIcon from '@material-ui/icons/Done';

import { DE_TYPES, DE_CARDS } from '../../../../constants/digitalEmployee';
import { Wrapper, FinishWrapper } from '../forms.style';

const Finish = () => {
  const type: string = String(window.location.pathname).split('/').pop() || '';
  const DETitle = capitalize(type);

  return (
    <Wrapper>
      <h1>Congratulations!</h1>
      <FinishWrapper>
        <div className="finish-icon">
          <DoneIcon fontSize="large" />
        </div>
        <div className="finish-message">
          <span>You have successfully completed the configuration steps.</span>
          <span>{`${DETitle} will be ready in about 10-15min. You will receive a confirmation email with details about ${DETitle}’s skills and how to communicate.`}</span>
          <span>{`Please wait until you receive the email before starting your conversation with ${DETitle}.`}</span>
        </div>
      </FinishWrapper>
    </Wrapper>
  );
};

export default Finish;
export { Finish };
