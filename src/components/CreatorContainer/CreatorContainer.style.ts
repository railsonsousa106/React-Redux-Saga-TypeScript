import styled from "styled-components";

export const TextContainer = styled.div`
  margin-left: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
`;

export const DateContainer = styled.div`
  display: flex;
  color: #747474;
  font-size: 14px;
  align-items: center;
`;

export const Point = styled.div`
  width: 1px;
  height: 1px;
  content: "";
  border-radius: 100%;
  border: 1px solid #747474;
  background: #747474;
  margin: 0 13px;
`;

export const MainContainer = styled.div`
  display: flex;
  margin: 0;
  align-items: flex-end;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    margin: 0;
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
