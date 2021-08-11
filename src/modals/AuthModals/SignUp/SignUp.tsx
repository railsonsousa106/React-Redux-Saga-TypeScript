import React, { useState, BaseSyntheticEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { validateEmail } from '../../../utils';
import { authActions } from '../../../redux/auth/actions';
import { OpenModalStatus } from '../../../constants/modals';
import { selectSignUpError } from '../../../redux/auth/selectors';

interface IProps {
  setOpenedModal: (status: OpenModalStatus) => void;
}

const SignUp = ({ setOpenedModal }: IProps) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const signUpError = useSelector(selectSignUpError);
  const { email, password } = formData;
  const isValidData = useMemo(() => {
    const { email, password } = formData;

    return Boolean(validateEmail(email) && password.length >= 9 && password.length < 32);
  }, [formData]);

  const signInWithGoogleHandler = async () => {
    dispatch(authActions.authWithGoogle(() => setOpenedModal('')));
  };

  const signInWithMicrosoftHandler = () => {
    dispatch(authActions.authWithMicrosoft(() => setOpenedModal('')));
  };

  const signUpWithEmailAndPassword = () => {
    const { email, password } = formData;

    if (isValidData) {
      dispatch(
        authActions.signUpWithEmail({
          email,
          password,
          actionHandler: () => setOpenedModal(''),
        })
      );
    }
  };

  const onChangeFormInput = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <MainContainer>
      <ContentContainer>
        <h1>Join SKAEL</h1>
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
          <StyledButton onClick={signUpWithEmailAndPassword} isBlocked={!isValidData}>
            Create an account
          </StyledButton>
          {signUpError && <ErrorMessage>{signUpError}</ErrorMessage>}
        </StyledForm>
        <SocialMainContainer>
          <p>OR</p>
          <SocialContainer>
            <Social onClick={signInWithGoogleHandler}>
              <img src={googleIcon} alt={'google'} />
            </Social>
            <Social onClick={signInWithMicrosoftHandler}>
              <img src={microsoftIcon} alt={'microsoft'} />
            </Social>
            {/* temporaly hidden till realization */}
            <Social>
              <img src={linkedinIcon} alt={'linkedIn'} />
            </Social>
          </SocialContainer>
        </SocialMainContainer>
        <NoAccountContainer>
          <p>Already have an account?</p>
          <TitleContainer onClick={() => setOpenedModal('signIn')}>
            <p>Sign in</p>
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

export default SignUp;
export { SignUp };
