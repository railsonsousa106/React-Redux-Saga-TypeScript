import { Action } from '../commonTypes';
import { ContactUsUser, ContactUsUI, PayloadContactUsUser, PayloadContactUsUI } from './types';

const prefix = '[Contact Us]';

const TYPES = {
  CONTACT_US_USER_DATA_REFRESH: `${prefix} contact-us-user-data-refresh`,
  CONTACT_US_UI_REFRESH: `${prefix} contact-us-ui-refresh`,
  CONTACT_US_FORM_RESET: `${prefix} contact-us-form-reset`,
};

export const contactUsActions = {
  ...TYPES,
  contactUsUserRefresh: (user: ContactUsUser): Action<PayloadContactUsUser> => ({
    type: TYPES.CONTACT_US_USER_DATA_REFRESH,
    payload: { user },
  }),
  contactUsUiRefresh: (ui: ContactUsUI): Action<PayloadContactUsUI> => ({
    type: TYPES.CONTACT_US_UI_REFRESH,
    payload: { ui },
  }),
  contactUsFormReset: (): Action => ({
    type: TYPES.CONTACT_US_FORM_RESET,
  }),
};
