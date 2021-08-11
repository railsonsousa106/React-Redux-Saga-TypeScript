import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MainContainer, TitleContainer, StyledBackgroundLine, TagsContainer, StyledTag } from './Tags.style';
import { selectHomeBlogsData } from '../../../../../redux/homeBlogs/selectors';

const Tags = () => {
  const { tags } = useSelector(selectHomeBlogsData);

  return (
    <MainContainer>
      <TitleContainer>
        <h1>Tags</h1>
        <StyledBackgroundLine background={'rgba(120, 96, 250, 0.6)'} />
      </TitleContainer>
      <TagsContainer>
        {
          tags
            ? tags.map((elem: any, key: any) => (
                <Link key={key} to={`/blog/tagged-stories/${elem.id}`} style={{ textDecoration: 'none' }}>
                  <StyledTag>{elem.name}</StyledTag>
                </Link>
              ))
            : null //TODO here should be loading indicator
        }
      </TagsContainer>
    </MainContainer>
  );
};

export default Tags;
export { Tags };
