import React from 'react';
import { useSpring, animated } from 'react-spring';

import { MainContainer } from './NoPostsPage.style';
import { ContentContainer } from '../../../commonStyles';
import noposts from '../../../assets/blog/homePage/NoPosts.jpg';

const NoPostsPage = () => {
  const springsStyleForMainBlog = useSpring({
    transform: 'translate(0, 0)',
    from: { transform: 'translate(-50px, -50px)' },
  });

  return (
    <ContentContainer>
      <MainContainer>
        <animated.div style={springsStyleForMainBlog}>
          <div style={{ width: '40%', height: '40%', margin: 'auto' }}>
            <img src={noposts} alt="No posts Screen" />
          </div>
        </animated.div>
      </MainContainer>
    </ContentContainer>
  );
};

export default NoPostsPage;
export { NoPostsPage };
