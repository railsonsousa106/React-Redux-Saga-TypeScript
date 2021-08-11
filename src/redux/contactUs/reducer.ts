import { Action } from '../commonTypes';
import { contactUsActions } from './actions';
import { ContactUs } from './types';

const contactUsInitState: ContactUs = {
  user: {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  },
  ui: {
    loading: false,
    errors: {},
    success: false,
  },
};

export default function contactUsReducer(state: ContactUs = contactUsInitState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case contactUsActions.CONTACT_US_USER_DATA_REFRESH: {
      return {
        ...state,
        user: { ...state.user, ...payload.user },
      };
    }
    case contactUsActions.CONTACT_US_UI_REFRESH: {
      const resultState = {
        ...state,
        ui: { ...state.ui, ...payload.ui },
      };
      return resultState;
    }
    case contactUsActions.CONTACT_US_FORM_RESET: {
      return {
        ...state,
        user: contactUsInitState.user,
      };
    }
    default:
      return state;
  }
}
