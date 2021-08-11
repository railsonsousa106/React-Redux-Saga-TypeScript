import { Node } from 'slate';
import { Action } from '../commonTypes';
import {
  PayloadCategory,
  PayloadContent,
  PayloadCount,
  PayloadIsOpen,
  PayloadTitle,
  PayloadImage,
  PayloadTags,
} from './types';

const prefix = '[Post Blog]';

const TYPES = {
  SET_TITLE_OF_NEW_POST: `${prefix} set-title-of-new-post`,
  SET_CONTENT_OF_NEW_POST: `${prefix} set-content-of-new-post`,
  SET_IMAGE_OF_NEW_POST: `${prefix} set-image-of-new-post`,
  SET_TAGS_OF_NEW_POST: `${prefix} set-tags-of-new-post`,
  SET_COUNT_OF_WORDS_ON_NEW_POST: `${prefix} set-count-of-words-on-new-post`,
  SET_MAIN_MODAL_FOR_NEW_POST: `${prefix} set-main-modal-for-new-post`,
  SET_MODAL_OF_PUBLISHED_POST: `${prefix} set-modal-of-published-post`,
  SET_CURRENT_CATEGORY: `${prefix} set-current-category`,
};

export const postBlogActions = {
  ...TYPES,
  setNewPostTitle: (title: string | null): Action<PayloadTitle> => ({
    type: TYPES.SET_TITLE_OF_NEW_POST,
    payload: { title },
  }),
  setNewPostContent: (content: Node[]): Action<PayloadContent> => ({
    type: TYPES.SET_CONTENT_OF_NEW_POST,
    payload: { content },
  }),
  setNewPostWordsCount: (count: number | null): Action<PayloadCount> => ({
    type: TYPES.SET_COUNT_OF_WORDS_ON_NEW_POST,
    payload: { count },
  }),
  setNewPostImage: (image: object | null): Action<PayloadImage> => ({
    type: TYPES.SET_IMAGE_OF_NEW_POST,
    payload: { image },
  }),
  setNewPostTags: (tags: number[]): Action<PayloadTags> => ({
    type: TYPES.SET_TAGS_OF_NEW_POST,
    payload: { tags },
  }),
  setMainModalPostBlog: (isOpen: boolean): Action<PayloadIsOpen> => ({
    type: TYPES.SET_MAIN_MODAL_FOR_NEW_POST,
    payload: { isOpen },
  }),
  setPublishedModalPostBlog: (isOpen: boolean): Action<PayloadIsOpen> => ({
    type: TYPES.SET_MODAL_OF_PUBLISHED_POST,
    payload: { isOpen },
  }),
  setCurrentCategory: (category: string): Action<PayloadCategory> => ({
    type: TYPES.SET_CURRENT_CATEGORY,
    payload: { category },
  }),
};
