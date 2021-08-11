import React, { useState, useEffect } from 'react';
import moment from 'moment';

import {
  StyledDrawer,
  MainContainer,
  HeaderContainer,
  CloseIconContainer,
  CommentTextarea,
  Comment,
  CommentsContainer,
  AuthorContainer,
  AuthorInfoContainer,
  Avatar,
  StyledButton,
} from './CommentsDrawer.style';
import { IComment } from '../../../types';
import closeIcon from 'assets/changedBlog/comments/close.png';
import Input from 'components/Input/Input';
import firebase from 'utils/firebase';
import commentAvatar from 'assets/design/comments/avatar.png';

import { useDispatch, useSelector } from 'react-redux';
import { modalsActions } from '../../../../../redux/modals/actions';
import { selectIsLoggedIn } from '../../../../../redux/auth/selectors';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  comments: IComment[];
  id: string;
}

const CommentsDrawer = ({ isOpen, onClose, comments, id }: IProps) => {
  const [commentText, setCommentText] = useState('');

  const [nextIDComment, setIDComment] = useState(null);

  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const respondComment = () => {
    if (isLogged === false) {
      dispatch(modalsActions.authModalStatusRefresh('signIn'));
    } else {
      firebase
        .database()
        .ref(`designPageData/blogsData/${id}/comments/${nextIDComment}`)
        .set({
          author: {
            name: 'John',
            surname: 'Doe',
            date: '2020-06-04',
            avatar: 'avatar.png',
          },
          description: commentText,
          createdTime: '2020-08-16',
        });
      setCommentText('');
    }
  };

  return (
    <StyledDrawer anchor={'right'} open={isOpen} onClose={onClose}>
      <MainContainer>
        <HeaderContainer>
          <h1>Comments ({comments.length})</h1>
          <CloseIconContainer onClick={onClose}>
            <img src={closeIcon} alt={'close'} />
          </CloseIconContainer>
        </HeaderContainer>
        <Input
          StyledComponent={CommentTextarea}
          placeholder={'Leave your comment'}
          name={'comment'}
          value={commentText}
          type={'text'}
          onChange={e => setCommentText(e.target.value)}
        />
        <StyledButton onClick={respondComment}>Respond</StyledButton>
        <CommentsContainer>
          {comments.map((comment, key) => {
            const { author, description, createdAt } = comment;
            const { firstName, lastName } = author;

            return (
              <Comment key={key}>
                <AuthorContainer>
                  <Avatar>
                    <img src={commentAvatar} alt={'avatar'} />
                  </Avatar>
                  <AuthorInfoContainer>
                    <h1>
                      {firstName} {lastName}
                    </h1>
                    <p>{moment(createdAt).fromNow()}</p>
                  </AuthorInfoContainer>
                </AuthorContainer>
                <p>{description}</p>
              </Comment>
            );
          })}
        </CommentsContainer>
      </MainContainer>
    </StyledDrawer>
  );
};

export default CommentsDrawer;
export { CommentsDrawer };
