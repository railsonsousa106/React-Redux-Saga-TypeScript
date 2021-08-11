import React from 'react';
import { useHistory } from 'react-router-dom';

import { convertFromRaw } from 'draft-js';

import logo from 'assets/header/logo.png';
import {
  CreateBlogContainer,
  MainContainer,
  MainHeaderContainer,
  ButtonsContainer,
  StyledButton,
  ModalFinish,
  SocialMediaIcons,
  HeaderNewPost,
  CloseButton,
  CreateBlogHeader,
} from './HeaderBlogCreate.style';

import { PostBlogModal } from '../../../../modals/PostBlogModal';
import { Dialog } from '@material-ui/core';
import { PostBlog } from '../../../../containers/PostBlog';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from 'assets/authModals/close.png';
import { postBlogActions } from 'redux/postBlog/actions';
import { selectPostBlogData } from 'redux/postBlog/selectors';

import { ReactComponent as TwitterIcon } from 'assets/design/social/greyIcons/twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/design/social/greyIcons/facebook.svg';
import { ReactComponent as LinkedIn } from 'assets/design/social/greyIcons/linkedin.svg';
import { ReactComponent as Email } from 'assets/design/social/greyIcons/email.svg';
import { ReactComponent as Icon } from 'assets/design/social/greyIcons/iconfinder.svg';

const HeaderBlogCreate = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { title, content, isModalForNewPostOpen, isModalAfterPost } = useSelector(selectPostBlogData);

  const handleCancel = () => {
    history.goBack();
  };

  const handlePublish = () => {
    const draftContent = convertFromRaw(content);
    title && draftContent.hasText()
      ? dispatch(postBlogActions.setMainModalPostBlog(true))
      : alert('Please, fill in your post title AND post content. Both of the field are required');
  };

  const handlePublishFinish = () => {
    dispatch(postBlogActions.setPublishedModalPostBlog(false))
    history.push('/blog/home');
  }

  return (
    <CreateBlogHeader>
      <img src={logo} alt={'logo'} />
      <ButtonsContainer>
        <StyledButton background={'#d1d1d1'} onClick={handleCancel}>
          Cancel
        </StyledButton>
        <StyledButton background={'#27B3B6'} onClick={handlePublish}>
          Publish
        </StyledButton>
      </ButtonsContainer>
      <PostBlogModal
        isOpen={isModalForNewPostOpen}
        onClose={() => dispatch(postBlogActions.setMainModalPostBlog(false))}
        maxWidth={'lg'}
      >
        <PostBlog />
      </PostBlogModal>

      <Dialog
        maxWidth={'lg'}
        open={isModalAfterPost}
        disableBackdropClick
      >
        <ModalFinish>
          <CloseButton onClick={handlePublishFinish}>
            <img src={closeIcon} alt={'closeIcon'} />
          </CloseButton>
          <h1>Your story is published!</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <SocialMediaIcons>
            <TwitterIcon />
            <FacebookIcon />
            <LinkedIn />
            <Email />
            <Icon />
          </SocialMediaIcons>
        </ModalFinish>
      </Dialog>
    </CreateBlogHeader>
  );
};

export default HeaderBlogCreate;
export { HeaderBlogCreate };
