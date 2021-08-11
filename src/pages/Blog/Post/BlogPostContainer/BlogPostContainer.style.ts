import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  max-height: 450px;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    transform: translateY(-20%);
  }
`;

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-top: 40px;
  grid-column-gap: 66px;
`;

export const MainTextContainer = styled.div`
  p {
    text-transform: uppercase;
    color: #747474;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const FollowButton = styled.div`
  padding: 5px 0;
  text-transform: uppercase;
  font-size: 12px;
  background: #f0f0f0;
  font-weight: 600;
  border-radius: 6px;
  color: #82848e;
  cursor: pointer;
  width: 75px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
