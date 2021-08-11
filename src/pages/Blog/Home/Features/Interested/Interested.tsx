import React from 'react';

import { MainContainer, TextContainer, LinkContainer } from './Interested.style';
import { ReactComponent as Character } from 'assets/blog/interested/character.svg';

const Interested = () => {
  return (
    <MainContainer>
      <Character />
      <TextContainer>
        <h1>Interested in becoming an author ?</h1>
        <LinkContainer>
          <a href={'/'}>Sign up here</a> and start writing
        </LinkContainer>
      </TextContainer>
    </MainContainer>
  );
};

export default Interested;
export { Interested };
