import React, { useState } from 'react';

import { MainContainer, Form, StyledEmailInput } from './SubscribeForm.style';
import { Input } from '../../../../../components/Input';
import { ConfirmModal } from './ConfirmModal';

const SubscribeForm = () => {
  const [emailData, setEmailData] = useState('');

  return (
    <MainContainer>
      <h1>Subscribe for newsletter to receive updates every week</h1>
      <Form>
        <Input
          StyledComponent={StyledEmailInput}
          placeholder={'Your email'}
          name="search"
          defaultValue={emailData}
          type="text"
          onChange={e => setEmailData(e.target.value)}
        />
        <ConfirmModal email={emailData} />
      </Form>
    </MainContainer>
  );
};

export default SubscribeForm;
export { SubscribeForm };
