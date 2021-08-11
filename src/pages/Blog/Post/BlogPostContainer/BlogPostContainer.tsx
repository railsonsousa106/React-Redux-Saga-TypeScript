import React, { useState } from 'react';

import { MainContainer, MainContentContainer, ImageContainer, MainTextContainer } from './BlogPostContainer.style';
import { ContentContainer } from 'commonStyles';

import { IBlog } from '../../types';
import { NavigationContainer } from './NavigationContainer';
import { BlogContainer } from './BlogContainer';
import { WrittenBy } from './WrittenBy';
import { FromOurBlog } from './FromOurBlog';
import { Comments } from './Comments';

interface IProps {
  blog: IBlog;
  latestBlogs: IBlog[];
}

const BlogPostContainer = ({ blog, latestBlogs }: IProps) => {
  const { picture, author, description, likes, comments, id } = blog;
  const { firstName, lastName, description: authorDescription } = author;

  return (
    <MainContainer>
      {picture && (
        <ImageContainer>
          <img src={picture} alt={'extension-img'} />
        </ImageContainer>
      )}
      <ContentContainer>
        <MainContentContainer>
          <NavigationContainer
            firstName={firstName}
            lastName={lastName}
            description={authorDescription}
            likes={likes}
            comments={comments}
            id={id}
          />
          <MainTextContainer>
            <BlogContainer blog={blog} />
            <WrittenBy author={author} />
            <Comments comments={comments} id={id} />
          </MainTextContainer>
        </MainContentContainer>
        <FromOurBlog latestBlogs={latestBlogs} />
      </ContentContainer>
    </MainContainer>
  );
};

export default BlogPostContainer;
export { BlogPostContainer };
