import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IBlog } from '../../types';
import {
  BlogElementWrapper,
  BlogPicture,
  BlogContentContainer,
  InfoContainer,
  TitleContainer,
  StyledBackgroundLine,
  CreatorMainContainer,
} from './SingleBlogElement.style';
import { CreatorContainer } from '../../../../components/CreatorContainer';

import { getBlogTexts } from '../../utils';

interface IProps {
  blog: IBlog;
  isCenterBlog?: boolean;
}

const SingleBlogElement = ({ blog, isCenterBlog }: IProps) => {
  const { id, title, description, picture, author, readMinutes, createdAt, likes } = blog;
  const { firstName, lastName, avatar } = author;

  return (
    <BlogElementWrapper isCenterBlog={isCenterBlog}>
      {picture && <BlogPicture src={picture} alt={'blog-pic'} />}
      <BlogContentContainer>
        <Link to={`/blog/${id}`} style={{ textDecoration: 'none' }}>
          <InfoContainer>
            <span>Service Delivery</span>
            <TitleContainer>
              <StyledBackgroundLine background={'#FFD17A'} />
              <h1>{title}</h1>
            </TitleContainer>
            <p>{getBlogTexts(description).slice(0, 200)}...</p>
          </InfoContainer>
        </Link>
        <Link to={'/blog/your-stories'} style={{ textDecoration: 'none' }}>
          <CreatorMainContainer>
            <CreatorContainer
              createdAt={createdAt}
              firstName={firstName}
              lastName={lastName}
              readMinutes={readMinutes}
              avatar={avatar}
              likes={likes}
              id={id}
            />
          </CreatorMainContainer>
        </Link>
      </BlogContentContainer>
    </BlogElementWrapper>
  );
};

export default SingleBlogElement;
export { SingleBlogElement };
