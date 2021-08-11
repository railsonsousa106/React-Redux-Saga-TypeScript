import styled from 'styled-components';

import { BackgroundLine } from '../../../../../commonStyles';

export const MainContainer = styled.div`
  margin-top: 120px;
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  top: 20px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding-right: 30px;

  h1 {
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    margin: 0;
  }
`;

export const AuthorsContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;
`;

export const AuthorTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: rgba(219, 219, 219, 1);
    font-size: 42px;
    font-weight: 500;
    margin: 0;
    transition: 0.3s;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 37px;
  width: fit-content;
  h2 {
    font-size: 24px;
    font-weight: 500;
    color: rgba(11, 11, 9, 1);
    margin: 0;
    transition: 0.3s;
    border-bottom: 2px solid transparent;
  }
`;

export const Author = styled.div`
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 50px 1fr;

  :hover {
    ${AuthorTitleContainer} {
      h1 {
        color: #27b3b6;
      }
    }

    ${InfoContainer} {
      h2 {
        border-bottom: 2px solid #000000;
      }
    }
  }
`;

export const DateContainer = styled.div`
  margin: 10px 0 0 0;
  display: flex;

  font-size: 14px;
  color: rgba(116, 116, 116, 1);
  font-weight: 400;
  align-items: center;
`;
