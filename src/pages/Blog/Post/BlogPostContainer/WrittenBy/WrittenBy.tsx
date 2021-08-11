import React, { useState } from "react";
import {
  MainContainer,
  CreatorContainer,
  CreatorTextContainer,
  WrittenByTextContainer,
  AvatarContainer,
  StyledLink,
  NameContainer,
  FollowButtonContainer,
} from "./WrittenBy.style";
import { FollowButton } from "../BlogPostContainer.style";
import { IAuthor } from "../../../types";
import arrowRight from "assets/changedBlog/arrowRight.png";

interface IProps {
  author: IAuthor;
}

const WrittenBy = ({ author }: IProps) => {
  const { firstName, lastName, avatar, description } = author;

  return (
    <MainContainer>
      <h2>written by</h2>
      <WrittenByTextContainer>
        <CreatorContainer>
          <AvatarContainer>
            <img src={avatar} alt={"avatar"} />
          </AvatarContainer>
          <CreatorTextContainer>
            <NameContainer>
              <h1>
                {firstName} {lastName}
              </h1>
              <FollowButtonContainer>
                <FollowButton>follow</FollowButton>
              </FollowButtonContainer>
            </NameContainer>

            <p>{description}</p>
          </CreatorTextContainer>
        </CreatorContainer>
        <StyledLink to={"/blog"}>
          Read all posts <img src={arrowRight} alt={"arrow"} />
        </StyledLink>
      </WrittenByTextContainer>
    </MainContainer>
  );
};

export default WrittenBy;
export { WrittenBy };
