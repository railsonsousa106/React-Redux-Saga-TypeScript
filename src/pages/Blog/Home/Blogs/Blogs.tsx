import React from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';

import { MainContainer } from './Blogs.style';
import { SingleBlogElement } from '../SingleBlogElement';
import { selectHomeBlogsData } from '../../../../redux/homeBlogs/selectors';

const Blogs = () => {
  const springsStyleForBlogElement = useSpring({
    transform: 'translate(0, 0)',
    from: { transform: 'translate(25px, 25px)' },
    flex: 1,
  });

  const { blogs } = useSelector(selectHomeBlogsData);

  return (
    <animated.div style={springsStyleForBlogElement}>
      <MainContainer>
        {
          blogs
            ? blogs.map((elem: any, key: any) => {
                return <SingleBlogElement blog={elem} key={key} />;
              })
            : null //TODO here should be loading indicator)
        }
      </MainContainer>
    </animated.div>
  );
};

export default Blogs;
export { Blogs };
