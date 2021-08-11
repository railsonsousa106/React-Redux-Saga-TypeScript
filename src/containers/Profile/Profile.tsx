import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import firebase from '../../utils/firebase';
import { authActions } from '../../redux/auth/actions';
import { ProfileButton } from './ProfileButton';

const Profile = () => {
  const dispatch = useDispatch();
  let user = {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: '',
  };
  const userData = firebase.auth().currentUser;
  const [anchorProfilePopover, setAnchorProfilePopover] = useState<HTMLElement | null>(null);

  const onClose = () => {
    setAnchorProfilePopover(null);
  };

  const signOutHandler = async () => {
    dispatch(authActions.signOut());
  };

  if (!userData) {
    let getCookie = (cname: string) => {
      var name = cname + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    };
    let token = getCookie('token');
    if (token) {
      let displayName = getCookie('user_profile');
      user.displayName = displayName;
    } else {
      return null;
    }
  }

  return (
    <ProfileButton
      userData={userData ? userData : user}
      anchorProfilePopover={anchorProfilePopover}
      onClose={onClose}
      setAnchorProfilePopover={setAnchorProfilePopover}
      signOutHandler={signOutHandler}
    />
  );
};

export default Profile;
export { Profile };
