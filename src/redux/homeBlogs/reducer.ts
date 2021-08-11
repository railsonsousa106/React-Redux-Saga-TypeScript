import { Action } from '../commonTypes';
import { homeBlogsActions } from './actions';

const initialState = {
  blogs: [],
  tags: [],
  topAuthors: [],
  featureStories: [],
};

export default function homeBlogsReducer(state = initialState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case homeBlogsActions.SET_BLOGS: {
      return {
        ...state,
        blogs: payload.data,
      };
    }
    case homeBlogsActions.SET_TAGS: {
      return {
        ...state,
        tags: payload.data,
      };
    }
    case homeBlogsActions.SET_TOP_AUTHORS: {
      return {
        ...state,
        topAuthors: payload.data,
      };
    }
    case homeBlogsActions.SET_FEATURE_STORIES: {
      return {
        ...state,
        featureStories: payload.data,
      };
    }
    case homeBlogsActions.ADD_COMMENT: {
      return {
        ...state,
        blogs: state.blogs.map((blog: any) => {
          if (blog.id === payload.data.id) {
            return { ...blog };
          }
          return blog;
        }),
      };
    }
    default:
      return state;
  }
}
