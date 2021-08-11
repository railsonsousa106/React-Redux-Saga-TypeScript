import React from 'react';

import { MainContainer } from './Tags.style';

interface IProps {
  tags: string[];
}

const Tags = ({ tags }: IProps) => {
  return (
    <MainContainer>
      {tags.map((elem, key) => (
        <p key={key}>{elem}</p>
      ))}
    </MainContainer>
  );
};

export default Tags;
export { Tags };
