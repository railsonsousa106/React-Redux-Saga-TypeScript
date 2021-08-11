import React, { useEffect, useRef } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import { ContentContainer } from 'commonStyles';
import { homeBlogsActions } from '../../redux/homeBlogs/actions';

import BlogsHome from './Home';
import BlogPost from './Post';
import BlogCreate from './Create';
import { YourStories as YourStoriesPage } from './YourStories';
import { TaggedStories as TaggedStoriesPage } from './TaggedStories';
import { MainContainer } from './Blog.style';

interface IPropsRoute {
  component: React.ElementType;
  path: string;
  exact?: boolean;
}

const useFetchData = () => {
  const isSubscribed = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      fetch('https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/blogs/approved'),
      fetch('https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/tags'),
      fetch('https://us-central1-dev-skael-website.cloudfunctions.net/blogs/api/authors'),
    ])
      .then(res => {
        return Promise.all(res.map(x => x.json()));
      })
      .then(json => {
        if (isSubscribed.current) {
          dispatch(homeBlogsActions.setBlogs(json[0]));
          dispatch(homeBlogsActions.setTags(json[1]));
          dispatch(homeBlogsActions.setTopAuthors(json[2]));
        }
      });
    return () => {
      isSubscribed.current = false;
    };
  }, []);

  return isSubscribed;
};

const Blog = (props: any) => {
  useFetchData();

  const loadingWrapper = (component: React.ElementType | JSX.Element | any) =>
    props.mainBlogData && props.blogsDataDesignPage ? component : null; //TODO here should be loading indicator

  return (
    <MainContainer>
      <Switch>
        <Redirect exact from={'/blog'} to={'/blog/home'} />
        <Route exact path={props.match.url + '/home'} component={BlogsHome} />
        <Route exact path={props.match.url + '/your-stories/:id'} component={YourStoriesPage} />
        <Route exact path={props.match.url + '/tagged-stories/:id'} component={TaggedStoriesPage} />
        <Route exact path={props.match.url + '/create'} component={BlogCreate} />
        <Route path={props.match.url + '/:id'} component={BlogPost} />
      </Switch>
    </MainContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    blogs: state.homeBlogsData.blogs,
  };
};

export default connect(mapStateToProps)(Blog);
export { Blog };
