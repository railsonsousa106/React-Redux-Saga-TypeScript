import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BackgroundLine } from '../../../commonStyles';

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 20px;
  width: 0;
`;

export const MainContainer = styled.div`
  background: #fff;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;

  h2 {
    font-size: 16px;
    font-weight: 400;
    margin: 20px 0 0 0;
  }

  :hover {
    ${StyledBackgroundLine} {
      width: 100%;
    }
  }

  img {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 5px 0 0;
  margin-top: 20px;
  z-index: 1;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;

export const CreatorMainContainer = styled.div`
  margin-top: 21px;
  max-width: 420px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
`;
