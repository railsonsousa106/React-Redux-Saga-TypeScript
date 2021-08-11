import { Action } from '../commonTypes';
import { designPageActions } from './actions';

const initialState = {
  mainBlogData: null,
  blogsData: null,
  urlLamp: '',
  urlLemon: '',
  urlDesignBook: '',
  urlComputer: '',
  urlAvatar: '',
  urlCommentsAvatar: '',
};

export default function designPageReducer(state = initialState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case designPageActions.SET_DESIGN_PAGE_DATA: {
      return {
        ...state,
        mainBlogData: payload.data,
      };
    }
    case designPageActions.SET_DESIGN_PAGE_BLOGS_DATA: {
      return {
        ...state,
        blogsData: payload.data,
      };
    }
    case designPageActions.SET_URL_LAMP: {
      return {
        ...state,
        urlLamp: payload.url,
      };
    }
    case designPageActions.SET_URL_LEMON: {
      return {
        ...state,
        urlLemon: payload.url,
      };
    }
    case designPageActions.SET_URL_DESIGN_BOOK: {
      return {
        ...state,
        urlDesignBook: payload.url,
      };
    }
    case designPageActions.SET_URL_COMPUTER: {
      return {
        ...state,
        urlComputer: payload.url,
      };
    }
    case designPageActions.SET_URL_AVATAR: {
      return {
        ...state,
        urlAvatar: payload.url,
      };
    }
    case designPageActions.SET_URL_COMMENTS_AVATAR: {
      return {
        ...state,
        urlCommentsAvatar: payload.url,
      };
    }
    default:
      return state;
  }
}
