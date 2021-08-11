import styled from "styled-components";

import { BackgroundLine } from "commonStyles";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const MainTitleContainer = styled.div`
  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #7860fa;
  }
`;

export const TitleContainer = styled.div`
  font-size: 46px;
  font-weight: 700;
  color: #0b0b09;
  display: flex;
  margin-top: 16px;
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 40px;
  width: 100%;
  left: 0;
`;

export const BlogTitleContainer = styled.div`
  width: fit-content;
  position: relative;
  padding: 0 10px;
  margin-left: 10px;
`;

export const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 100px;
`;
