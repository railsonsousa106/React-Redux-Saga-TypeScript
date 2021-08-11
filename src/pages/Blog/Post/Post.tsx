import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import BlogPostContainer from './BlogPostContainer';
import { NoPostsPage } from '../NoPostsPage';
import { IBlog } from '../types';

export interface IProps {
  match: {
    params: {
      id: string;
    };
  };
  blogs: IBlog[];
}

const BlogPost = ({ match, blogs }: IProps) => {
  const { id } = match.params;
  const blog = useMemo(() => blogs.find(elem => elem.id.toString() === id), [id, blogs]);

  if (blog) {
    return <BlogPostContainer blog={blog} latestBlogs={blogs.slice(0, 3)} />;
  }
  return null;
};

const mapStateToProps = (state: any) => {
  return {
    blogs: state.homeBlogsData.blogs,
  };
};

export default connect(mapStateToProps)(BlogPost);
