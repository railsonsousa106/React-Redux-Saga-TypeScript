import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BackgroundLine } from '../../../commonStyles';

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 45px;
  right: 0;
  width: 50%;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0;
  margin-top: 20px;
  z-index: 1;

  h1 {
    font-size: 46px;
    font-weight: 700;
    color: #0b0b09;
    margin: 0;
  }
`;

export const WriteStoryButton = styled(Link)`
  width: 150px;
  box-sizing: border-box;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7860fa;
  border-radius: 5px;
  color: #fff !important;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
`;

export const Stories = styled.div`
  width: 100%;
`;
