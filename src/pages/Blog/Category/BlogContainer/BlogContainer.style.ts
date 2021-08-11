import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BackgroundLine } from '../../../../commonStyles';

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 20px;
  width: 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 44px;
  cursor: pointer;
  h2 {
    color: rgba(116, 116, 116, 1);
    font-size: 18px;
    font-weight: 400;
    max-width: 400px;
  }
`;

export const MainBlogContainer = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  img {
    min-width: 50%;
  }
  :hover {
    ${StyledBackgroundLine} {
      width: 100%;
    }
  }
`;

export const MainBlogText = styled.div`
  margin: 40px 0 0 36px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 5px 0 0;
  z-index: 1;

  h1 {
    font-size: 28px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;

export const BlogsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  margin-top: 50px;
`;

export const BlogElement = styled.div``;

export const BlogElementTitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 5px 0 0;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;

export const CreatorMainContainer = styled.div`
  margin-top: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
