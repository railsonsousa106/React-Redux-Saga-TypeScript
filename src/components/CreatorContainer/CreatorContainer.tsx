import React, { useState } from 'react';
import moment from 'moment';

import {
  DateContainer,
  NameContainer,
  TextContainer,
  Point,
  MainContainer,
  Avatar,
  MainContentContainer,
  LikeContainer,
} from './CreatorContainer.style';
import { ReactComponent as LikeImage } from 'assets/blog/homePage/like.svg';

interface IProps {
  createdAt: Date;
  firstName: string;
  lastName: string;
  readMinutes: number;
  avatar: string;
  likes: number;
  id: number;
}

const CreatorContainer = ({ createdAt, firstName, lastName, readMinutes, avatar, likes, id }: IProps) => {
  return (
    <MainContentContainer>
      <MainContainer>
        <Avatar>
          <img src={avatar} alt={'avatar'} />
        </Avatar>
        <TextContainer>
          <NameContainer>
            {firstName} {lastName}
          </NameContainer>
          <DateContainer>
            {moment(createdAt).format('MMM DD, YYYY')} <Point /> {readMinutes} min to read
          </DateContainer>
        </TextContainer>
      </MainContainer>
      <LikeContainer>
        <LikeImage />
        <p>{likes}</p>
      </LikeContainer>
    </MainContentContainer>
  );
};

export default CreatorContainer;
export { CreatorContainer };
