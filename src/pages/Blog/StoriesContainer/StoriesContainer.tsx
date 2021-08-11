import React from 'react';

import {
  MainContainer,
  Header,
  TitleContainer,
  StyledBackgroundLine,
  Stories,
  WriteStoryButton,
} from './StoriesContainer.style';

import { Story } from '../Story';

const StoriesContainer = ({ blogs }: any) => {
  return (
    <MainContainer>
      <Header>
        <TitleContainer>
          <h1>Stories</h1>
          {/*  <h1>{name} {surname} stories</h1> */}
          <StyledBackgroundLine background={'#FFD17A'} />
        </TitleContainer>
        <WriteStoryButton to={'/blog/create'}>Write a story</WriteStoryButton>
      </Header>
      <Stories>
        {blogs &&
          blogs.map((blog: any, key: any) => {
            return <Story blog={blog} key={key} />;
          })}
      </Stories>
    </MainContainer>
  );
};

export default StoriesContainer;
export { StoriesContainer };
