import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  padding: 60px 0;
  margin-top: 60px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #747474;
    text-transform: uppercase;
  }
`;

export const WrittenByTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CreatorContainer = styled.div`
  display: flex;
`;

export const CreatorTextContainer = styled.div`
  margin-left: 15px;
  max-width: 900px;

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: #000000;
    margin: 0;
  }

  p {
    line-height: 28px;
    font-size: 16px;
    font-weight: 400;
    margin: 20px 0 0 0;
    text-transform: none;
  }
`;

export const AvatarContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;

  img {
    margin-left: 15px;
    width: fit-content!important;
  }

  :hover {
    color: rgba(120, 96, 250, 1);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowButtonContainer = styled.div`
  margin-left: 50px;
`;
