import React from 'react';
import { useSpring, animated } from 'react-spring';

import { MainContainer, TitleContainer, StyledBackgroundLine } from './Design.style';
import { ContentContainer } from '../../../commonStyles';
import { BlogContainer } from './BlogContainer';
import { IBlog } from 'pages/Blog/types';

export interface designBlog {
  mainBlogData: IBlog;
  blogsData: IBlog[];
}

const Design = ({ mainBlogData, blogsData }: designBlog) => {
  const springsStyleForAnimatedBlocks = useSpring({
    transform: 'translate(0, 0)',
    from: { transform: 'translate(25px, 25px)' },
  });

  return (
    <ContentContainer>
      <MainContainer>
        <TitleContainer>
          <animated.div style={springsStyleForAnimatedBlocks}>
            <h1>Design</h1>
          </animated.div>
          <StyledBackgroundLine background={'rgba(234, 84, 39, 0.6)'} />
        </TitleContainer>
        <h2>Lorem ipsum dolor sit amet, consetetur.</h2>
        {/* <animated.div style={springsStyleForAnimatedBlocks}>
          <Tags tags={tags} />
        </animated.div> */}
        {mainBlogData && blogsData && <BlogContainer blogs={blogsData} mainBlog={mainBlogData} />}
        {/*TODO loading indicator*/}
      </MainContainer>
    </ContentContainer>
  );
};

export default Design;
export { Design };
