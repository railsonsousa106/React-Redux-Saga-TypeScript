import React from 'react';
import { ReactElement } from 'react';

import { MainContainer, CloseButton, Content, ContentContainer } from './PostBlogModal.style';
import closeIcon from '../../assets/authModals/close.png';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  maxWidth?: false | 'lg' | 'md' | 'xs' | 'sm' | 'xl';
}

const PostBlogModal = (props: IProps) => {
  const { isOpen, onClose, children, maxWidth } = props;

  return (
    <MainContainer
      fullScreen
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={maxWidth}
    >
      <ContentContainer>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt={'closeIcon'} />
        </CloseButton>
        <Content>{React.cloneElement(children)}</Content>
      </ContentContainer>
    </MainContainer>
  );
};

export default PostBlogModal;
export { PostBlogModal };
