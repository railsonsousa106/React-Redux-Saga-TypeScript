import { Action } from '../commonTypes';
import { yourStoriesActions } from './actions';

const initialState = {
  stories: null,
};

export default function yourStoriesReducer(state = initialState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case yourStoriesActions.SET_YOUR_STORIES: {
      return {
        ...state,
        stories: payload.data,
      };
    }
    default:
      return state;
  }
}
