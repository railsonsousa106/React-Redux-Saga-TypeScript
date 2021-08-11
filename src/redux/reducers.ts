import authReducer from './auth/reducer';
import designPageReducer from './designPage/reducer';
import contactUsReducer from './contactUs/reducer';
import digitalEmployeeDataReducer from './digitalEmployee/reducer';
import modalsDataReducer from './modals/reducer';
import postBlogReducer from './postBlog/reducer';
import homeBlogsReducer from './homeBlogs/reducer';
import yourStoriesReducer from './yourStories/reducer';

export default {
  modalsData: modalsDataReducer,
  digitalEmployeeData: digitalEmployeeDataReducer,
  authData: authReducer,
  postBlogData: postBlogReducer,
  designPageData: designPageReducer,
  homeBlogsData: homeBlogsReducer,
  yourStoriesData: yourStoriesReducer,
  contactUsData: contactUsReducer,
};
