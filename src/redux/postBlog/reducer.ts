import { Action } from '../commonTypes';
import { postBlogActions } from './actions';

const initialState = {
  title: null,
  content: null,
  image: {
    url: null,
    ext: null,
  },
  tags: [],
  countsOfWords: 0,
  isModalForNewPostOpen: false,
  isModalAfterPost: false,
  currentCategory: '',
};

export default function postBlogReducer(state = initialState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case postBlogActions.SET_TITLE_OF_NEW_POST: {
      return {
        ...state,
        title: payload.title,
      };
    }
    case postBlogActions.SET_CONTENT_OF_NEW_POST: {
      return {
        ...state,
        content: payload.content,
      };
    }
    case postBlogActions.SET_IMAGE_OF_NEW_POST: {
      return {
        ...state,
        image: payload.image,
      };
    }
    case postBlogActions.SET_TAGS_OF_NEW_POST: {
      return {
        ...state,
        tags: payload.tags,
      };
    }
    case postBlogActions.SET_COUNT_OF_WORDS_ON_NEW_POST:
      return {
        ...state,
        countsOfWords: payload.count,
      };
    case postBlogActions.SET_MAIN_MODAL_FOR_NEW_POST:
      return {
        ...state,
        isModalForNewPostOpen: payload.isOpen,
      };
    case postBlogActions.SET_MODAL_OF_PUBLISHED_POST:
      return {
        ...state,
        isModalAfterPost: payload.isOpen,
      };
    case postBlogActions.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: payload.category,
      };
    default:
      return state;
  }
}
