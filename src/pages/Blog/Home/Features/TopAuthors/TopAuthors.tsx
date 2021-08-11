import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';

import {
  MainContainer,
  StyledBackgroundLine,
  TitleContainer,
  Author,
  InfoContainer,
  DateContainer,
  AuthorsContainer,
  AuthorTitleContainer,
} from './TopAuthors.style';

import { Point } from '../../../../../commonStyles';
import { selectHomeBlogsData } from '../../../../../redux/homeBlogs/selectors';

const TopAuthors = () => {
  const { topAuthors } = useSelector(selectHomeBlogsData);

  return (
    <MainContainer>
      <TitleContainer>
        <h1>Top Authors</h1>
        <StyledBackgroundLine background={'rgba(39, 179, 182, 0.6)'} />
      </TitleContainer>
      <AuthorsContainer>
        {
          topAuthors
            ? topAuthors.map((elem: any, key: any) => {
                const { id, firstName, lastName, createdAt, blogs } = elem;

                return (
                  <Link
                    key={key}
                    to={`/blog/your-stories/${id}`}
                    style={
                      blogs.length > 0 ? { textDecoration: 'none' } : { pointerEvents: 'none', textDecoration: 'none' }
                    }
                  >
                    <Author>
                      <AuthorTitleContainer>
                        <h1>{id}</h1>
                      </AuthorTitleContainer>
                      <InfoContainer>
                        <h2>
                          {firstName} {lastName}
                        </h2>
                        <DateContainer>
                          {moment(createdAt).format('MMM DD, YYYY')} <Point /> {blogs.length} stories
                        </DateContainer>
                      </InfoContainer>
                    </Author>
                  </Link>
                );
              })
            : null //TODO here should be loading indicator
        }
      </AuthorsContainer>
    </MainContainer>
  );
};

export default TopAuthors;
export { TopAuthors };
