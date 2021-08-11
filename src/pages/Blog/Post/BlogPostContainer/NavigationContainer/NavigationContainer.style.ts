import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 420px;

  h1 {
    color: #000000;
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0 0 0;
    width: fit-content;
  }

  h2 {
    color: #747474;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 30px 0 0 0;
    width: fit-content;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #82848e;
    margin: 15px 0 0 0;
    padding-bottom: 30px;
  }
`;

export const SplitLine = styled.div`
  background: #d5d5d5;
  width: 100%;
  height: 1px;
  width: 100%;
  content: "";
`;

export const FollowButtonContainer = styled.div`
  margin-bottom: 30px;
`;

export const SocialContainer = styled.div`
  margin: 30px 0 50px 0;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 400;
    color: #82848e;
    margin: 0 0 0 15px;
    padding: 0;
  }
`;
