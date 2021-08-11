import { MESSENGERS } from '../assets/interfaces/digitalEmployee';

export const messengerParams = {
  [MESSENGERS.slack]: {
    inputs: ['app_id', 'client_id', 'client_secret', 'signing_secret'],
  },
  [MESSENGERS.teams]: {
    inputs: ['app_id', 'app_secret'],
  },
  [MESSENGERS.googleChat]: {
    inputs: ['app_id', 'app_secret'],
  },
};
