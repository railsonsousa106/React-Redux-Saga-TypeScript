import styled from "styled-components";

import { BackgroundLine, Tag } from "commonStyles";

export const StyledBackgroundLine = styled(BackgroundLine)`
  z-index: -1;
  top: 70px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 5px 0 0;

  h1 {
    font-size: 70px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;

export const AuthorMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 18px;
    color: #7860fa;
    font-weight: 500;
    margin: 0;
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  overflow: hidden;
`;

export const DateContainer = styled.div`
  display: flex;
  color: #747474;
  font-size: 14px;
  align-items: center;
  margin-top: 10px;
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

export const BackButton = styled.div`
  width: 60px;
  height: 60px;
  background: #f1effd;
  display: flex;
  justify-content: center;
  align-items: center;
  content: "";
  border-radius: 100%;
  cursor: pointer;
`;

export const MainText = styled.div`
  width: 100%;
  margin-top: 60px;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: #0b0b09;
    text-transform: none;
  }

  h1 {
    font-size: 42px;
    font-weight: 600;
    color: #000000;
    margin: 140px 0 60px 0;
  }

  blockqoute {
    margin: 80px auto;
    font-size: 28px;
    font-style: italic;
    font-weight: 400;
    max-width: 800px;
  }

  p {
    :first-child {
      ::first-letter {
        font-size: 90px;
        float: left;
        margin: 15px 10px 0 0;
      }
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
`;

export const StyledTag = styled(Tag)`
  font-size: 13px;
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialContainer = styled.a`
  transition: 0.3s;
  fill: rgba(130, 132, 142, 1);
  margin-right: 20px;
  :hover {
    fill: #7860fa;
    opacity: 1;
  }
`;

export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NameCreatorContainer = styled.div`
  margin-left: 15px;
`;

export const FollowButtonContainer = styled.div`
  margin-left: 25px;
`;

export const SocialMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const LikesMainContainer = styled.div`
  display: flex;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  cursor: pointer;
  p {
    color: #82848e;
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 0 15px;
    padding: 0;
  }

  :first-child {
    margin-left: 0;
  }
`;
