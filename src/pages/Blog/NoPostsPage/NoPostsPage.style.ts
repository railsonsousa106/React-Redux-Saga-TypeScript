import styled from 'styled-components';

import { BackgroundLine } from '../../../commonStyles';

export const MainContainer = styled.div`
  margin-top: 70px;
  h2 {
    font-size: 20px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    margin: 24px 0 0 0;
  }
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 70px;
  left: 5px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 5px 0 0;

  h1 {
    font-size: 73px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;
