import React, { useState, useEffect } from 'react';
import moment from 'moment';

import {
  CommentsWrapper,
  HeaderContainer,
  CommentTextarea,
  Comment,
  CommentsContainer,
  AuthorContainer,
  AuthorInfoContainer,
  Avatar,
  StyledButton,
} from './Comments.style';
import { IComment } from '../../../types';
import Input from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../../../redux/auth/selectors';
import { modalsActions } from '../../../../../redux/modals/actions';
import { homeBlogsActions } from '../../../../../redux/homeBlogs/actions';

interface IProps {
  comments: IComment[];
  id: number;
}

const Comments = ({ comments, id }: IProps) => {
  const [commentText, setCommentText] = useState('');
  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const respondComment = async () => {
    /*
    if (isLogged === false) {
      dispatch(modalsActions.authModalStatusRefresh('signIn'));
    } else {
      
      setCommentText('');
    }
    */
    const res = await fetch('https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/comments/create', {
      method: 'post',
      body: JSON.stringify({
        description: commentText,
        authorId: 2,
        blogId: id,
      }),
    });
    const comment = await res.json();
    setCommentText('');
  };

  return (
    <CommentsWrapper>
      <HeaderContainer>
        <h1>Comments ({comments.length})</h1>
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
                  <img src={author.avatar} alt={'avatar'} />
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
    </CommentsWrapper>
  );
};

export default Comments;
export { Comments };
