import { Action } from '../commonTypes';
import { PayloadData } from './types';

const prefix = '[Your Stories]';

const TYPES = {
  SET_YOUR_STORIES: `${prefix} set-your-stories`,
};

export const yourStoriesActions = {
  ...TYPES,
  setYourStories: (data: any): Action<PayloadData> => ({
    type: TYPES.SET_YOUR_STORIES,
    payload: { data },
  }),
};
