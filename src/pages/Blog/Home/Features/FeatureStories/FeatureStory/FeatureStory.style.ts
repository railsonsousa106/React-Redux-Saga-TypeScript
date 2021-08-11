import styled from 'styled-components';

import { BackgroundLine } from '../../../../../../commonStyles';

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 20px;
`;

export const Story = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
  background: #fff;
  cursor: pointer;

  :hover {
    ${StyledBackgroundLine} {
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 170px;
`;

export const SubTitleContainer = styled.div`
  position: relative;
  width: fit-content;
  z-index: 1;
  h1 {
    font-size: 22px;
    font-weight: 600;
    color: rgba(11, 11, 9, 1);
    margin: 10px 0 0 0;
  }

  ${StyledBackgroundLine} {
    width: 0;
    top: 25px;
  }
`;

export const NameContainer = styled.div`
  margin-bottom: 20px;
  p {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    color: rgba(11, 11, 9, 1);
  }
`;

export const DateContainer = styled.div`
  font-size: 14px;
  color: rgba(11, 11, 9, 1);
  font-weight: 400;
  margin: 5px 0 0 0;
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AuthorInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const LikeContainer = styled.div`
  margin-left: 2rem;
  display: flex;

  align-items: center;
  .a {
    fill: transparent !important;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #82848e;
    margin: 0 0 0 15px;
  }
`;
