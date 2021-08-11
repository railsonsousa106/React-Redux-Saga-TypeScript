import styled from 'styled-components';

import { BackgroundLine, Tag } from '../../../../../commonStyles';

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  top: 25px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding-right: 5px;

  h1 {
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    margin: 0;
  }
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const StyledTag = styled(Tag)``;
