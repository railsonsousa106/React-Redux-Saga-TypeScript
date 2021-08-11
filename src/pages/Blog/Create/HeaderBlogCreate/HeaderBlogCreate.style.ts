import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { CommonButton } from 'commonStyles';

export const CreateBlogHeader = styled.div``;

export const MainContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

export const LogoContainer = styled.div`
  align-self: flex-end;
`;

export const MenuList = styled.div`
  display: flex;
`;

export const BackgroundSelectedLine = styled.div`
  position: absolute;
  background: #ffd17a;
  left: 0;
  top: 10px;
  height: 16px;
  width: 0;
  transition: 0.4s;
  z-index: -1;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  .selected {
    ${BackgroundSelectedLine} {
      width: 100%;
    }
  }
`;

export const MenuElement = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  position: relative;
  text-decoration: none;
  margin-right: 36px;
  z-index: 1;
`;

export const StyledButton = styled(CommonButton)``;

export const ButtonsContainer = styled.div`
  display: flex;

  ${StyledButton} {
    :last-child {
      margin-left: 12px;
    }
  }
`;

export const StyledSearchInput = styled.input`
  border: none;
  font-size: 16px;
  width: 100px;
  outline: none;
  transition: 0.4s;
  color: #747474;
  font-size: 24px;
  padding-left: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;

  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #747474;
  }

  :focus {
    width: 310px;
    border-bottom: 1px solid #747474;

    ::placeholder {
      font-size: 14px;
      color: #afacac;
    }
  }

  ${({ value }: { value: string }) =>
    value.length > 0 &&
    css`
      width: 310px;
    `}
`;

export const ModalFinish = styled.div`
  max-height: 503px;
  background: white;
  padding: 90px 120px 74px 170px;
  // width: 50%;
  font-family: Poppins;
  //margin: 220px auto;
  box-shadow: 0px 20px 30px #0000002c;
  border-radius: 10px;
  border: none;
  text-align: center;
  h1 {
    margin: 0;
    letter-spacing: 0px;
    font-size: 42px;
    font-weight: 500;
  }

  p {
    margin: 50px auto 100px;
    width: fit-content;
    font-size: 24px;
  }
`;
export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0 10px;
    max-height: 25px;
    max-width: 25px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 35px;
  top: 35px;
  cursor: pointer;
`;

export const CreateBlogContainer = styled.div`
  width: 100%;
  background: #fff;
  max-width: 1400px;
  margin: 0 auto;
`;

export const HeaderNewPost = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99999;
`;
