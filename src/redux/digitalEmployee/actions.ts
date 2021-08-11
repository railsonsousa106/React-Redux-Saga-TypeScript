import { Action, PayloadData } from '../commonTypes';
import {
  OpenLoginWindow,
  ExchangeTokens,
  CompleteOAuth,
  PlatformRedirect,
  Messengers,
  DEID,
  CurrentStep,
  ProjectID,
  User,
  Services,
  UI,
  PayloadUI,
  PayloadMessengers,
  PayloadMessenger,
  PayloadServices,
  PayloadService,
  PayloadUser,
} from './types';

const prefix = '[Digital Employee]';

const TYPES = {
  SEND_CREDENTIALS: `${prefix} send-credentials`,
  VERIFY_EMAIL: `${prefix} verify-email`,
  DE_CURRENT_STEP_REFRESH: `${prefix} de-current-step-refresh`,
  DE_REFRESH: `${prefix} de-refresh`,
  DE_PROJECT_REFRESH: `${prefix} de-project-refresh`,
  DE_USER_REFRESH: `${prefix} de-user-refresh`,
  DE_SERVICE_REFRESH: `${prefix} de-service-refresh`,
  DE_SERVICES_REFRESH: `${prefix} de-services-refresh`,
  DE_MESSENGER_REFRESH: `${prefix} de-messenger-refresh`,
  DE_MESSENGERS_REFRESH: `${prefix} de-messengers-refresh`,
  DE_OPEN_LOGIN_WINDOW: `${prefix} de-open-login-window`,
  DE_EXCHANGE_TOKENS: `${prefix} de-exchange-tokens`,
  DE_COMPLETE_OAUTH: `${prefix} de-complete-oauth`,
  DE_CHECK_CONFIGURATION: `${prefix} de-check-configuration`,
  DE_APPLY_DE: `${prefix} de-apply-de`,
  DE_VERIFY_DE: `${prefix} de-verify-de`,
  DE_PLATFORM_REDIRECT: `${prefix} de-platform-redirect`,
  CONTACT_US_SEND_FORM: `${prefix} contact-us-send-form`,
  DE_UI_REFRESH: `${prefix} de-ui-refresh`,
  DE_FORMS_RESET: `${prefix} de-forms-reset`,
};

export const digitalEmployeeActions = {
  ...TYPES,
  sendCredentials: (): Action => ({
    type: TYPES.SEND_CREDENTIALS,
  }),
  currentStepRefresh: (currentStep: string): Action<CurrentStep> => ({
    type: TYPES.DE_CURRENT_STEP_REFRESH,
    payload: { currentStep },
  }),
  projectRefresh: (projectID: number): Action<ProjectID> => ({
    type: TYPES.DE_PROJECT_REFRESH,
    payload: { projectID },
  }),
  userRefresh: (user: User): Action<PayloadUser> => ({
    type: TYPES.DE_USER_REFRESH,
    payload: { user },
  }),
  serviceRefresh: (service: Services): Action<PayloadService> => ({
    type: TYPES.DE_SERVICE_REFRESH,
    payload: { service },
  }),
  servicesRefresh: (services: Services[]): Action<PayloadServices> => ({
    type: TYPES.DE_SERVICES_REFRESH,
    payload: { services },
  }),
  messengerRefresh: (messenger: Messengers): Action<PayloadMessenger> => ({
    type: TYPES.DE_MESSENGER_REFRESH,
    payload: { messenger },
  }),
  messengersRefresh: (messengers: Messengers[]): Action<PayloadMessengers> => ({
    type: TYPES.DE_MESSENGERS_REFRESH,
    payload: { messengers },
  }),
  uiRefresh: (ui: UI): Action<PayloadUI> => ({
    type: TYPES.DE_UI_REFRESH,
    payload: { ui },
  }),
  deRefresh: (deID: string): Action<DEID> => ({
    type: TYPES.DE_REFRESH,
    payload: { deID },
  }),
  verifyEmail: (): Action => ({
    type: TYPES.VERIFY_EMAIL,
  }),
  openLoginWindow: (data: OpenLoginWindow): Action<PayloadData<OpenLoginWindow>> => ({
    type: TYPES.DE_OPEN_LOGIN_WINDOW,
    payload: { data },
  }),
  exchangeTokens: (data: ExchangeTokens): Action<PayloadData<ExchangeTokens>> => ({
    type: TYPES.DE_EXCHANGE_TOKENS,
    payload: { data },
  }),
  completeOAuth: (data: CompleteOAuth): Action<PayloadData<CompleteOAuth>> => ({
    type: TYPES.DE_COMPLETE_OAUTH,
    payload: { data },
  }),
  checkConfiguration: (): Action => ({
    type: TYPES.DE_CHECK_CONFIGURATION,
  }),
  applyDE: (): Action => ({
    type: TYPES.DE_APPLY_DE,
  }),
  verifyDE: (): Action => ({
    type: TYPES.DE_VERIFY_DE,
  }),
  platformRedirect: (data: PlatformRedirect): Action<PayloadData<PlatformRedirect>> => ({
    type: TYPES.DE_PLATFORM_REDIRECT,
    payload: { data },
  }),
  contactUsSendForm: (): Action => ({
    type: TYPES.CONTACT_US_SEND_FORM,
  }),
  deFormsReset: (): Action => ({
    type: TYPES.DE_FORMS_RESET,
  }),
};
