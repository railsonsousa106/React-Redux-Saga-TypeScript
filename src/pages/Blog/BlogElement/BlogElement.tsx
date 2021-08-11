import React, { useState } from 'react';

import {
  MainContainer,
  TitleContainer,
  StyledBackgroundLine,
  CreatorMainContainer,
  StyledLink,
} from './BlogElement.style';
import { IBlog } from 'pages/Blog/types';
import { CreatorContainer } from '../../../components/CreatorContainer';

import { getBlogTexts } from '../utils';

interface IProps {
  blog: IBlog;
}

const BlogElement = ({ blog }: IProps) => {
  const { author, title, picture, id, description, likes, readMinutes, createdAt } = blog;
  const { avatar, firstName, lastName } = author;

  return (
    <StyledLink to={`/blog/${id}`}>
      <MainContainer>
        {picture && <img src={picture} alt={'blog-img'} />}
        <TitleContainer>
          <h1>{title}</h1>
          <StyledBackgroundLine background={'rgba(255, 209, 122, 1)'} />
        </TitleContainer>
        <h2>{getBlogTexts(description).slice(0, 50)}...</h2>
        <CreatorMainContainer>
          <CreatorContainer
            firstName={firstName}
            lastName={lastName}
            avatar={avatar}
            createdAt={createdAt}
            readMinutes={readMinutes}
            likes={likes}
            id={id}
          />
        </CreatorMainContainer>
      </MainContainer>
    </StyledLink>
  );
};

export default BlogElement;
export { BlogElement };
