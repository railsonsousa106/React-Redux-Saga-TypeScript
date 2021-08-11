import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import firebase from '../../../../../../utils/firebase';

import {
  StyledBackgroundLine,
  Story,
  ImageContainer,
  SubTitleContainer,
  TextContainer,
  NameContainer,
  DateContainer,
  AuthorInfoContainer,
  LikeContainer,
} from './FeatureStory.style';

import { Point } from '../../../../../../commonStyles';
import { ReactComponent as LikeImage } from '../../../../../../assets/blog/homePage/like.svg';

const FeatureStory = ({ elem, key, path }: any) => {
  const [realImage, setBlogImage] = useState('');
  const { title, creator, likes, picture } = elem;
  const { surName, readTime, name, date } = creator;

  firebase
    .storage()
    .ref(`designPage/${picture}`)
    .getDownloadURL()
    .then(function (url: any) {
      if (url != null) {
        setBlogImage(url);
      }
    });

  return (
    <Link to={`${path}`} style={{ textDecoration: 'none' }}>
      <Story key={key}>
        <ImageContainer>
          <img src={realImage} alt={`story-${key}`} />
        </ImageContainer>
        <TextContainer>
          <SubTitleContainer>
            <h1>{title}</h1>
            <StyledBackgroundLine background={'rgba(255, 209, 122, 1)'} />
          </SubTitleContainer>
          <AuthorInfoContainer>
            <NameContainer>
              <p>
                {name} {surName}
              </p>
              <DateContainer>
                {moment(date).format('MMM DD, YYYY')} <Point /> {readTime} min to read
              </DateContainer>
            </NameContainer>
            <LikeContainer>
              <LikeImage />
              <p>{likes}</p>
            </LikeContainer>
          </AuthorInfoContainer>
        </TextContainer>
      </Story>
    </Link>
  );
};

export default FeatureStory;
export { FeatureStory };
