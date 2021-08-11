import React from 'react';

import { MainContainer } from './Features.style';
import { FeatureStories } from './FeatureStories';
import { TopAuthors } from './TopAuthors';
import { Interested } from './Interested';
import { Tags } from './Tags';
import { SubscribeForm } from './SubscribeForm';

const Features = () => {
  return (
    <MainContainer>
      <FeatureStories />
      <TopAuthors />
      {/* <Interested /> */}
      <Tags />
      <SubscribeForm />
    </MainContainer>
  );
};

export default Features;
export { Features };
