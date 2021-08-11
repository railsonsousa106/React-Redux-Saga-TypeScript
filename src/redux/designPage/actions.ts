import { PayloadUrl } from 'redux/postBlog/types';
import { Action, PayloadData } from '../commonTypes';

const prefix = '[Design Page]';

const TYPES = {
  SET_DESIGN_PAGE_DATA: `${prefix} set-design-page-data`,
  SET_DESIGN_PAGE_BLOGS_DATA: `${prefix} set-design-page-blogs-data`,
  SET_URL_LAMP: `${prefix} set-url-lamp`,
  SET_URL_LEMON: `${prefix} set-url-lemon`,
  SET_URL_DESIGN_BOOK: `${prefix} set-url-design-book`,
  SET_URL_COMPUTER: `${prefix} set-url-computer`,
  SET_URL_AVATAR: `${prefix} set-url-avatar`,
  SET_URL_COMMENTS_AVATAR: `${prefix} set-url-comments-avatar`,
};

export const designPageActions = {
  ...TYPES,
  setDesignPageData: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.SET_DESIGN_PAGE_DATA,
    payload: { data },
  }),
  setDesignPageBlogsData: (data: any): Action<PayloadData<any>> => ({
    type: TYPES.SET_DESIGN_PAGE_BLOGS_DATA,
    payload: { data },
  }),
  setUrlLamp: (url: string): Action<PayloadUrl> => ({
    type: TYPES.SET_URL_LAMP,
    payload: { url },
  }),
  setUrlLemon: (url: string): Action<PayloadUrl> => ({
    type: TYPES.SET_URL_LEMON,
    payload: { url },
  }),
  setUrlDesignBook: (url: string): Action<PayloadUrl> => ({
    type: TYPES.SET_URL_DESIGN_BOOK,
    payload: { url },
  }),
  setUrlComputer: (url: string): Action<PayloadUrl> => ({
    type: TYPES.SET_URL_COMPUTER,
    payload: { url },
  }),
  setUrlAvatar: (url: string): Action<PayloadUrl> => ({
    type: TYPES.SET_URL_AVATAR,
    payload: { url },
  }),
  setUrlCommentsAvatar: (url: string): Action<PayloadUrl> => ({
    type: TYPES.SET_URL_COMMENTS_AVATAR,
    payload: { url },
  }),
};
