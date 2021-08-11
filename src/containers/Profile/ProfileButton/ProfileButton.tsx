import React, { Fragment } from 'react';
import { UserInfo } from 'firebase';

import {
  MainContainer,
  BellItemContainer,
  NameContainer,
  AvatarContainer,
  ArrowContainer,
  ArrowPopover,
  Menu,
  StyledPopover,
  MenuElement1,
  SplitLine,
} from './ProfileButton.style';
import { ReactComponent as Arrow } from 'assets/header/profileContainer/arrowDown.svg';
import bell from 'assets/header/profileContainer/bell.png';
import emptyProfile from 'assets/header/emptyProfile.png';

interface IProps {
  userData: UserInfo;
  anchorProfilePopover: HTMLElement | null;
  onClose: () => void;
  setAnchorProfilePopover: (value: HTMLElement | null) => void;
  signOutHandler: () => void;
}

const ProfileButton = ({
  userData,
  anchorProfilePopover,
  onClose,
  setAnchorProfilePopover,
  signOutHandler,
}: IProps) => {
  const { displayName, photoURL, email } = userData;

  return (
    <Fragment>
      <MainContainer onClick={e => setAnchorProfilePopover(e.currentTarget)}>
        <BellItemContainer>
          <img src={bell} alt={'bell'} />
        </BellItemContainer>
        <NameContainer>
          <AvatarContainer>
            <img src={photoURL || emptyProfile} alt={'avatar'} />
          </AvatarContainer>
          <p>{displayName || email}</p>
        </NameContainer>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </MainContainer>
      <StyledPopover
        open={Boolean(anchorProfilePopover)}
        anchorEl={anchorProfilePopover}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ArrowPopover />
        <Menu onClick={() => onClose()}>
          <MenuElement1>My Stories</MenuElement1>
          <MenuElement1>My Account</MenuElement1>
          <SplitLine />
          <MenuElement1 onClick={signOutHandler}>Sign Out</MenuElement1>
        </Menu>
      </StyledPopover>
    </Fragment>
  );
};

export default ProfileButton;
export { ProfileButton };
