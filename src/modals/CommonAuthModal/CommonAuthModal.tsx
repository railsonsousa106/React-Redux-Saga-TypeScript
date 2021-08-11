import React, { ReactElement } from 'react';

import { MainContainer, CloseButton, Content, ContentContainer } from './CommonAuthModal.style';
import closeIcon from 'assets/authModals/close.png';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  maxWidth?: false | 'lg' | 'md' | 'xs' | 'sm' | 'xl';
}

const CommonAuthModal = (props: IProps) => {
  const { isOpen, onClose, children, maxWidth } = props;

  return (
    <MainContainer
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

export default CommonAuthModal;
export { CommonAuthModal };
