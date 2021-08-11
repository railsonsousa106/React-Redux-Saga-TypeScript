import styled from 'styled-components';

export const StoryElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  margin-top: 50px;
  border-bottom: 1px solid #d1d1d1;

  h1 {
    color: #000000;
    font-weight: 500;
    font-size: 24px;
    margin: 0;
  }

  p {
    color: #000000;
    font-weight: 400;
    max-width: 1000px;
    line-height: 30px;
  }
`;

export const SocialMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PostedContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin: 0 0 15px 15px !important;
    width: fit-content !important;
  }
  p {
    color: #747474;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const Point = styled.div`
  width: 1px;
  height: 1px;
  content: '';
  border-radius: 100%;
  border: 1px solid #747474;
  background: #747474;
  margin: 0 13px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  :first-child {
    margin-left: 0;
  }
  p {
    color: #747474;
    font-size: 18px;
    margin: 0 0 0 10px;
  }
  .a {
    stroke: #82848e;
    fill: transparent;
  }
`;
