import React from 'react';
import { useSelector } from 'react-redux';

import { selectHomeBlogsData } from '../../../../../redux/homeBlogs/selectors';

import { MainContainer, TitleContainer, StyledBackgroundLine } from './FeatureStories.style';

import { FeatureStory } from './FeatureStory';

const FeatureStories = () => {
  const { featureStories: stories } = useSelector(selectHomeBlogsData);

  return (
    <MainContainer>
      <TitleContainer>
        <h1>Featured Stories</h1>
        <StyledBackgroundLine background={'rgba(234, 84, 39, 0.6)'} />
      </TitleContainer>
      {
        stories ? stories.map((elem: any, key: any) => <FeatureStory elem={elem} key={key} path={key} />) : null //TODO here should be loading indicator
      }
    </MainContainer>
  );
};

export default FeatureStories;
export { FeatureStories };
