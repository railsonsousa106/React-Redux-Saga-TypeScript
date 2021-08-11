import styled, { css } from 'styled-components';

import { BackgroundLine } from '../../../../commonStyles';

export const MainContainer = styled.div`
  width: 100%;
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  width: 0;
  z-index: -1;
  top: 25px;
`;

export const InfoContainer = styled.div`
  max-width: 726px;

  span {
    color: #747474;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    color: #747474;
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0 0 0;
  }
`;

export const BlogElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 40px;
  box-sizing: border-box;
  cursor: pointer;

  ${({ isCenterBlog }: { isCenterBlog?: boolean }) =>
    isCenterBlog &&
    css`
      border-bottom: 1px solid #d5d5d5;
      padding-bottom: 80px;
      margin-bottom: 40px !important;

      img {
        width: calc(100% + 150px);
      }

      ${InfoContainer} {
        max-width: 1070px;
      }
    `}

  :first-child {
    margin-top: 0;
    /* margin-bottom: 120px; */
  }

  img {
    margin-left: 0;
  }

  :hover {
    ${StyledBackgroundLine} {
      width: 100%;
    }
  }
`;

export const BlogPicture = styled.img`
  border-radius: 5px;
`;

export const BlogContentContainer = styled.div`
  margin-left: 120px;
  background: #fff;
  padding: 15px 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
`;

export const TitleContainer = styled.div`
  h1 {
    margin: 10px 0 0 0;
    color: #0b0b09;
    font-size: 32px;
    font-weight: 600;
  }
  z-index: 1;
  position: relative;
  width: fit-content;
`;

export const CreatorMainContainer = styled.div`
  margin-top: 54px;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  fill: transparent !important;
  p {
    font-size: 14px;
    font-weight: 400;
    color: #82848e;
    margin: 0 0 0 15px;
  }
`;
