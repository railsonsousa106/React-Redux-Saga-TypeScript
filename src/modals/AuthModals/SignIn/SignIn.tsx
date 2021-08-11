import React, { useState, BaseSyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import {
  ContentContainer,
  StyledButton,
  NoAccountContainer,
  StyledBackgroundLine,
  TitleContainer,
  MainContainer,
  AgreeContainer,
  StyledInput,
  StyledForm,
  Social,
  SocialContainer,
  SocialMainContainer,
  ErrorMessage,
} from '../AuthModals.style';
import { Input } from '../../../components/Input';
import googleIcon from '../../../assets/authModals/signIn/google.svg';
import microsoftIcon from '../../../assets/authModals/signIn/microsoft.svg';
import linkedinIcon from '../../../assets/authModals/signIn/linkedin.svg';
import { authActions } from '../../../redux/auth/actions';
import { OpenModalStatus } from '../../../constants/modals';
import { selectSignInError } from '../../../redux/auth/selectors';

const FormMainContainer = styled.div`
  margin-top: 75px;
`;

interface IProps {
  setOpenedModal: (status: OpenModalStatus) => void;
}

const SignIn = ({ setOpenedModal }: IProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const signInError = useSelector(selectSignInError);
  const { email, password } = formData;
  const dispatch = useDispatch();

  const signInWithGoogleHandler = async () => {
    dispatch(authActions.authWithGoogle(() => setOpenedModal('')));
  };

  const signInWithMicrosoftHandler = () => {
    dispatch(authActions.authWithMicrosoft(() => setOpenedModal('')));
  };

  const signInLinkedIn = async () => {
    const res = await axios({
      url: `http://localhost:5001/dev-skael-website/us-central1/redirect`,
      method: 'get',
    });

    window.location = res.data;
  };

  const onChangeFormInput = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const signInWithEmailAndPassword = () => {
    const { email, password } = formData;

    dispatch(
      authActions.signInWithEmail({
        email,
        password,
        actionHandler: () => setOpenedModal(''),
      })
    );
  };

  return (
    <MainContainer>
      <ContentContainer>
        <h1>Welcome back</h1>
        <FormMainContainer>
          <StyledForm>
            <Input
              StyledComponent={StyledInput}
              placeholder={'Your Email'}
              name={'email'}
              value={email}
              type={'email'}
              onChange={onChangeFormInput}
            />
            <Input
              StyledComponent={StyledInput}
              placeholder={'Password'}
              name={'password'}
              value={password}
              type={'password'}
              onChange={onChangeFormInput}
            />
            <StyledButton onClick={signInWithEmailAndPassword}>Create an account</StyledButton>
            {signInError && <ErrorMessage>{signInError}</ErrorMessage>}
          </StyledForm>
        </FormMainContainer>
        <SocialMainContainer>
          <p>OR</p>
          <SocialContainer>
            <Social onClick={signInWithGoogleHandler}>
              <img src={googleIcon} alt={'google'} />
            </Social>
            <Social onClick={signInWithMicrosoftHandler}>
              <img src={microsoftIcon} alt={'microsoft'} />
            </Social>
            <Social onClick={signInLinkedIn}>
              <img src={linkedinIcon} alt={'linkedIn'} />
            </Social>
          </SocialContainer>
        </SocialMainContainer>
        <NoAccountContainer>
          <p>No Account?</p>
          <TitleContainer onClick={() => setOpenedModal('signUp')}>
            <p>Create one</p>
            <StyledBackgroundLine background={'#FFD17A'} />
          </TitleContainer>
        </NoAccountContainer>
      </ContentContainer>
      <AgreeContainer>
        Click "Sign In" to agree to SKAEL’s <a href={'https://google.com'}>Terms of Service</a> and acknowledge that
        SKAEL’s <a href={'https://google.com'}>Privacy Policy</a> applies to you.
      </AgreeContainer>
    </MainContainer>
  );
};

export default SignIn;
export { SignIn };
