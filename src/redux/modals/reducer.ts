import { DEPLOYMENT_STAGE, MESSENGERS } from '../../assets/interfaces/digitalEmployee';
import { Action } from '../commonTypes';
import { modalsActions } from './actions';

const initState = {
  deployment: {
    visible: false,
    messenger: MESSENGERS.slack,
    stage: DEPLOYMENT_STAGE.creation,
  },
  freeTrial: {
    visible: false,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    company_size: '',
    subject: '',
  },
  authModal: {
    status: '',
  },
};

export default function modalsDataReducer(state = initState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case modalsActions.MODALS_AUTH_STATUS_REFRESH:
      return {
        ...state,
        authModal: { status: payload.status },
      };

    case modalsActions.MODALS_DEPLOYMENT_TOGGLE:
      return {
        ...state,
        deployment: {
          ...state.deployment,
          visible: payload.visible,
        },
      };
    case modalsActions.MODALS_DEPLOYMENT_DATA_SET:
      return {
        ...state,
        deployment: {
          ...state.deployment,
          ...payload.data,
        },
      };
    case modalsActions.MODALS_FREE_TRIAL_TOGGLE:
      return {
        ...state,
        freeTrial: {
          ...state.freeTrial,
          visible: payload.visible,
        },
      };
    case modalsActions.MODALS_FREE_TRIAL_DATA_SET:
      return {
        ...state,
        freeTrial: {
          ...state.freeTrial,
          ...payload.data,
        },
      };
    case modalsActions.MODALS_FREE_TRIAL_RESET:
      return {
        ...state,
        freeTrial: {
          ...initState.freeTrial,
        },
      };
    default:
      return state;
  }
}
