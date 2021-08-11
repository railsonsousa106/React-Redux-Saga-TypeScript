import React from 'react';

import { MainContainer, SplitLine, FollowButtonContainer, Social, SocialContainer } from './NavigationContainer.style';
import { FollowButton } from '../BlogPostContainer.style';
import { IComment } from '../../../types';
import { ReactComponent as Comment } from 'assets/changedBlog/comment.svg';
import { ReactComponent as Like } from 'assets/changedBlog/like.svg';

import { useDispatch, useSelector } from 'react-redux';
import { modalsActions } from '../../../../../redux/modals/actions';
import { selectIsLoggedIn } from '../../../../../redux/auth/selectors';

interface IProps {
  firstName: string;
  lastName: string;
  description: string;
  likes: number;
  comments: IComment[];
  id: number;
}

const NavigationContainer = ({ firstName, lastName, description, likes, comments, id }: IProps) => {
  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const addLike = (id: number, likes: any) => {
    if (isLogged === false) {
      dispatch(modalsActions.authModalStatusRefresh('signIn'));
    } else {
      console.log('add like');
    }
  };

  return (
    <MainContainer>
      <h2>written by</h2>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{description.slice(0, 100)}...</p>
      <FollowButtonContainer>
        <FollowButton>follow</FollowButton>
      </FollowButtonContainer>
      <SplitLine />
      <SocialContainer>
        <Social onClick={() => addLike(id, likes)}>
          <Like />
          <p>{likes}</p>
        </Social>
        <Social>
          <Comment />
          <p>{comments.length}</p>
        </Social>
      </SocialContainer>
      <h2>table of contents</h2>
    </MainContainer>
  );
};

export default NavigationContainer;
export { NavigationContainer };
