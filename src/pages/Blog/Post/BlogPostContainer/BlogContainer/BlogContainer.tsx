import React, { Fragment, useState } from 'react';
import moment from 'moment';

import { ReactComponent as Comment } from 'assets/changedBlog/comment.svg';
import { ReactComponent as Like } from 'assets/changedBlog/like.svg';

import { useDispatch, useSelector } from 'react-redux';
import { modalsActions } from '../../../../../redux/modals/actions';
import { selectIsLoggedIn } from '../../../../../redux/auth/selectors';

import { Dante } from '../../../MediumLikeEditor';

import {
  StyledBackgroundLine,
  TitleContainer,
  AuthorMainContainer,
  AuthorContainer,
  Avatar,
  DateContainer,
  Point,
  MainText,
  TagsContainer,
  StyledTag,
  SocialsContainer,
  FollowContainer,
  NameCreatorContainer,
  FollowButtonContainer,
  SocialMainContainer,
  LikeContainer,
  LikesMainContainer,
} from './BlogContainer.style';
import { FollowButton } from '../BlogPostContainer.style';
import { IBlog } from '../../../types';
import Social from '../Social';

interface IProps {
  blog: IBlog;
}

const BlogContainer = ({ blog }: IProps) => {
  const { title, author, description, tags, comments, likes, id, createdAt, readMinutes } = blog;
  const { avatar, firstName, lastName, social } = author;

  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const addLike = (id: number, likes: any) => {
    // const userData = firebase.auth().currentUser;
    if (isLogged === false) {
      dispatch(modalsActions.authModalStatusRefresh('signIn'));
    } else {
      console.log('add like');
    }
  };

  return (
    <Fragment>
      <p>Delivery service</p>
      <TitleContainer>
        <h1>{title}</h1>
        <StyledBackgroundLine background={'rgba(255, 209, 122, 1)'} />
      </TitleContainer>
      <AuthorMainContainer>
        <AuthorContainer>
          <Avatar>
            <img src={avatar} alt={'avatar'} />
          </Avatar>
          <NameCreatorContainer>
            <FollowContainer>
              <p>
                {firstName} {lastName}
              </p>
              <FollowButtonContainer>
                <FollowButton>follow</FollowButton>
              </FollowButtonContainer>
            </FollowContainer>
            <DateContainer>
              {moment(createdAt).format('MMM DD, YYYY')} <Point /> {readMinutes} min to read
            </DateContainer>
          </NameCreatorContainer>
        </AuthorContainer>
        <SocialsContainer>
          <Social social={social} />
        </SocialsContainer>
      </AuthorMainContainer>
      <MainText>
        <Dante read_only={true} content={JSON.parse(description)} />
      </MainText>
      <SocialMainContainer>
        <LikesMainContainer>
          <LikeContainer onClick={() => addLike(id, likes)}>
            <Like />
            <p>{likes}</p>
          </LikeContainer>
          <LikeContainer>
            <Comment />
            <p>{comments.length}</p>
          </LikeContainer>
        </LikesMainContainer>
        <SocialsContainer>
          <Social social={social} />
        </SocialsContainer>
      </SocialMainContainer>
      <TagsContainer>
        {tags.map((elem, key) => (
          <StyledTag key={key}>{elem.name}</StyledTag>
        ))}
      </TagsContainer>
    </Fragment>
  );
};

export default BlogContainer;
export { BlogContainer };
