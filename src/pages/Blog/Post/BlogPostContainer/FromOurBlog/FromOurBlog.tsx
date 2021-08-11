import React from "react";

import {
  MainContainer,
  TitleContainer,
  BlogTitleContainer,
  StyledBackgroundLine,
  BlogsContainer,
  MainTitleContainer,
} from "./FromOurBlog.style";
import Blog from "../../../BlogElement";
import { IBlog } from "../../../types";


interface IProps {
  latestBlogs: IBlog[];
}

const FromOurBlog = ({ latestBlogs }: IProps) => {

  return (
    <MainContainer>
      <MainTitleContainer>
        <h2>Latest Posts</h2>
      </MainTitleContainer>
      <TitleContainer>
        From Our
        <BlogTitleContainer>
          {" "}
          Blog
          <StyledBackgroundLine background={"rgba(255, 209, 122, 1)"} />
        </BlogTitleContainer>
      </TitleContainer>
      <BlogsContainer>
        {latestBlogs.map((elem, key) => (
          <Blog blog={elem} key={key} />
        ))}
      </BlogsContainer>
    </MainContainer>
  );
};

export default FromOurBlog;
export { FromOurBlog };
