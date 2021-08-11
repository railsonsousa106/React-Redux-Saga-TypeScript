import styled, { css } from 'styled-components';

import { BackgroundLine } from '../../commonStyles';

export const MainContainer = styled.div`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 42px;
    font-weight: 500;
    color: #000000;
    margin: 0 auto;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 60px;
`;

export const NoAccountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  p {
    font-size: 18px;
    color: #000000;
    font-weight: 400;
    margin: 0;
  }
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 8px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding-right: 5px;
  margin-left: 15px;
  z-index: 0;
  cursor: pointer;

  p {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    z-index: 999;
  }
`;

export const AgreeContainer = styled.div`
  font-size: 18px;
  color: #82848e;
  font-weight: 400;
  text-align: center;
  margin-top: 75px;

  a {
    color: #82848e;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  width: 100%;
  outline: none;
`;

export const StyledForm = styled.form`
  margin-top: 60px;
  width: 100%;
  position: relative;
`;

export const StyledButton = styled.div`
  width: 100%;
  background: #e84312;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  transition: 0.3s;

  ${({ isBlocked }: { isBlocked?: boolean }) =>
    isBlocked &&
    css`
      background: #aaa;
    `}
`;

export const SocialMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 16px;
    color: #747474;
    margin: 60px 0 0 0;
    font-weight: 400;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const Social = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d1d1d1;
  margin-left: 50px;
  cursor: pointer;
  margin-top: 60px;
  :first-child {
    margin-left: 0;
  }
`;

export const ErrorMessage = styled.p`
  color: #e84312;
  position: absolute;
  bottom: -50px;
`;
