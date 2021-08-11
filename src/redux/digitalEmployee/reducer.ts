import { availableDE, DE_STEPS_KEYS } from '../../constants/digitalEmployee';
import { cloneDeep } from 'lodash';
import { DigitalEmployee } from './types';
import { digitalEmployeeActions } from './actions';
import { Action } from '../commonTypes';

const digitalEmployeeInitState: DigitalEmployee = {
  currentStep: DE_STEPS_KEYS.userData,
  availableDE: availableDE,
  projectID: null,
  deID: null,
  user: {
    name: '',
    email: '',
    phone: '',
    organization: '',
    company_size: '',
    verification_code: '',
  },
  services: [],
  messengers: [],
  ui: {
    loading: false,
    exchangeTokenError: false,
    errorMessage: '',
  },
};

export default function digitalEmployeeDataReducer(state = digitalEmployeeInitState, action: Action<any>) {
  const { type, payload } = action;
  switch (type) {
    case digitalEmployeeActions.DE_CURRENT_STEP_REFRESH: {
      return {
        ...state,
        currentStep: payload.currentStep,
      };
    }
    case digitalEmployeeActions.DE_REFRESH: {
      return {
        ...state,
        deID: payload.deID,
      };
    }
    case digitalEmployeeActions.DE_PROJECT_REFRESH: {
      return {
        ...state,
        projectID: payload.projectID,
      };
    }
    case digitalEmployeeActions.DE_USER_REFRESH: {
      return {
        ...state,
        user: { ...state.user, ...payload.user },
      };
    }
    case digitalEmployeeActions.DE_SERVICE_REFRESH: {
      const newServices = cloneDeep(state.services);
      if (newServices.length === 0) {
        newServices.push({ params: payload.service.params, name: payload.service.name });
      } else {
        newServices.forEach(item => {
          if (item.name === payload.service.name) {
            item.params = { ...item.params, ...payload.service.params };
          }
        });
      }

      return {
        ...state,
        services: newServices,
      };
    }

    case digitalEmployeeActions.DE_SERVICES_REFRESH: {
      return {
        ...state,
        services: payload.services,
      };
    }
    case digitalEmployeeActions.DE_MESSENGER_REFRESH: {
      const newMessengers = cloneDeep(state.messengers);
      if (newMessengers.length === 0) {
        newMessengers.push({ params: payload.messenger.params, name: payload.messenger.name });
      } else {
        newMessengers.forEach(item => {
          if (item.name === payload.messenger.name) {
            item.params = { ...item.params, ...payload.messenger.params };
          }
        });
      }

      return {
        ...state,
        messengers: newMessengers,
      };
    }

    case digitalEmployeeActions.DE_MESSENGERS_REFRESH: {
      return {
        ...state,
        messengers: payload.messengers,
      };
    }

    case digitalEmployeeActions.DE_UI_REFRESH: {
      const resultState = {
        ...state,
        ui: { ...state.ui, ...payload.ui },
      };
      console.log('reducers.ts, digitalEmployeeDataReducers [357]: ', { payload, resultState });
      return resultState;
    }
    case digitalEmployeeActions.DE_FORMS_RESET: {
      return {
        ...state,
        user: digitalEmployeeInitState.user,
        services: digitalEmployeeInitState.services,
        messengers: digitalEmployeeInitState.messengers,
      };
    }
    default:
      return state;
  }
}
