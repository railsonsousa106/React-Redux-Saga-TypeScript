import React from 'react';
import moment from 'moment';

import { ReactComponent as EyeIcon } from 'assets/storiesList/eye.svg';
import { ReactComponent as LikeIcon } from 'assets/storiesList/like.svg';
import { ReactComponent as RepostIcon } from 'assets/storiesList/repost.svg';
import { ReactComponent as CommentIcon } from 'assets/storiesList/comment.svg';
import arrowDown from 'assets/storiesList/arrowDown.png';

import { Point, PostedContainer, Social, SocialContainer, SocialMainContainer, StoryElement } from './Story.style';

import { getBlogTexts } from '../utils';

const Story = ({ blog }: any) => {
  const { author, comments, description, title, likes, reposts, views, readMinutes, createdAt } = blog;
  const countOfWords = description.split(' ').length;

  return (
    <StoryElement>
      <h1>{title}</h1>
      <p>{getBlogTexts(description).slice(0, 300)}...</p>
      <SocialMainContainer>
        <PostedContainer>
          <p>Posted {moment(createdAt).format('MMM DD, YYYY')}</p>
          <Point />
          <p>
            {readMinutes} min to read ( {countOfWords} words ) so far
          </p>
          <img src={arrowDown} alt={'arrow'} />
        </PostedContainer>
        <SocialContainer>
          <Social>
            <EyeIcon />
            <p>{views}</p>
          </Social>
          <Social>
            <LikeIcon />
            <p>{likes}</p>
          </Social>
          <Social>
            <RepostIcon />
            <p>{reposts}</p>
          </Social>
          <Social>
            <CommentIcon />
            <p>{comments.length}</p>
          </Social>
        </SocialContainer>
      </SocialMainContainer>
    </StoryElement>
  );
};

export default Story;
export { Story };
