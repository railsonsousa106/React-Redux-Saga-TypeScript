import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ContentContainer } from '../../../commonStyles';
import { StoriesContainer } from '../StoriesContainer';
import { IBlog } from '../types';

interface RouteParams {
  id: string;
}

const YourStories = (props: any) => {
  const params = useParams<RouteParams>();
  const blogs = props.blogs && props.blogs.filter((b: IBlog) => b.author.id.toString() == params.id);

  return (
    <ContentContainer>
      <StoriesContainer blogs={blogs} />
    </ContentContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    blogs: state.homeBlogsData.blogs,
  };
};

export default connect(mapStateToProps)(YourStories);
