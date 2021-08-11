import React from 'react';
import { useSpring, animated } from 'react-spring';

import {
  MainContainer,
  MainBlogContainer,
  StyledBackgroundLine,
  TitleContainer,
  MainBlogText,
  BlogsContainer,
  CreatorMainContainer,
  StyledLink,
} from './BlogContainer.style';
import { IBlog } from 'pages/Blog/types';
import { CreatorContainer } from '../../../../components/CreatorContainer';
import { BlogElement } from '../../BlogElement';

interface IProps {
  blogs: IBlog[];
  mainBlog: IBlog;
}

const BlogContainer = ({ blogs, mainBlog }: IProps) => {
  const { picture, title, author, id, description, likes, createdAt, readMinutes } = mainBlog;
  const { avatar, firstName, lastName } = author;

  const springsStyleForMainBlog = useSpring({
    transform: "translate(0, 0)",
    from: { transform: "translate(-200px, -200px)" },
  });

  return (
    <MainContainer>
      <StyledLink to={`/blog/${id}`}>
        <animated.div style={springsStyleForMainBlog}>
          <MainBlogContainer>
            {picture && <img src={picture} alt={"blog-img"} />}
            <MainBlogText>
              <TitleContainer>
                <h1>{title}</h1>
                <StyledBackgroundLine background={"rgba(255, 209, 122, 1)"} />
              </TitleContainer>
              <h2>{description.slice(0, 50)}...</h2>
              <CreatorMainContainer>
                <CreatorContainer
                  createdAt={createdAt}
                  firstName={firstName}
                  lastName={lastName}
                  avatar={avatar}
                  readMinutes={readMinutes}
                  likes={likes}
                  id={id}
                />
              </CreatorMainContainer>
            </MainBlogText>
          </MainBlogContainer>
        </animated.div>
      </StyledLink>

      <BlogsContainer>
        {blogs.map((elem, key) => (
          <BlogElement blog={elem} key={key} />
        ))}
      </BlogsContainer>
    </MainContainer>
  );
};

export default BlogContainer;
export { BlogContainer };
