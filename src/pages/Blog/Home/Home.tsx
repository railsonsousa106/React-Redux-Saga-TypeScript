import React from 'react';

import { MainContainer } from './Home.style';
import { ContentContainer } from '../../../commonStyles';
import { Blogs } from './Blogs';
import { Features } from './Features';

//TODO add types properties for {blogsData, featuresData}

const Home = () => {
  return (
    <ContentContainer>
      <MainContainer>
        <Blogs />
        <Features />
      </MainContainer>
    </ContentContainer>
  );
};

export default Home;
export { Home };
