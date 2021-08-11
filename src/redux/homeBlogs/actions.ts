import { Action, PayloadData } from '../commonTypes';

const prefix = '[Home Blogs]';

const TYPES = {
  SET_BLOGS: `${prefix} set-home-page-blogs-data`,
  SET_TAGS: `${prefix} set-home-page-tags`,
  SET_TOP_AUTHORS: `${prefix} set-home-page-top-authors`,
  SET_FEATURE_STORIES: `${prefix} set-home-page-features-stories`,
  ADD_COMMENT: `${prefix} add-comment`,
};

export const homeBlogsActions = {
  ...TYPES,
  setBlogs: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.SET_BLOGS,
    payload: { data },
  }),
  setTags: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.SET_TAGS,
    payload: { data },
  }),
  setTopAuthors: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.SET_TOP_AUTHORS,
    payload: { data },
  }),
  setFeaturesStories: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.SET_FEATURE_STORIES,
    payload: { data },
  }),
  addComment: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.ADD_COMMENT,
    payload: { data },
  }),
};
