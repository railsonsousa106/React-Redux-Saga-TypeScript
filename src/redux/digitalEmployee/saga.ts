import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import { capitalize, isEmpty, toString } from 'lodash';
import { CONTROL_SUM, DE_STEPS_KEYS } from '../../constants/digitalEmployee';

import { DigitalEmployeeService } from '../../services/DigitalEmployeeService';
import { OAuthService } from '../../services/OAuthService';
import { InteractionService } from '../../services/InteractionService';

import { DigitalEmployeeUtils } from '../../utils/DigitalEmployeeUtils';
import { selectUserData, selectServicesData, selectDeID, selectCurrentDEMessengers } from './selectors';
import { IExchangeTokenResult, MESSENGERS } from '../../assets/interfaces/digitalEmployee';
import { RootState } from '../store';
import { webhookTokenNewDE, webhookContactUs, oauthDestinationURL } from '../../config';
import {
  CheckConfigurationBody,
  SendCredentialsBody,
  VerifyEmailBody,
} from '../../services/DigitalEmployeeService/dto/digitalEmployee-request.dto';
import { AddPlatformRequestDto } from '../../services/InteractionService/dto/addPlatform-request.dto';
import { BaseResponse } from '../../services/BaseService/interfaces';
import { AddPlatformResponseDto } from '../../services/InteractionService/dto/addPlatform-response.dto';
import { ExchangeTokens } from '../../services/OAuthService/dto/oauth-response.dto';
import { WebhookService } from '../../services/WebhookService';
import { CheckConfigurationResponse } from '../../services/DigitalEmployeeService/dto/digitalEmployee-response.dto';
import { validateEmail } from '../../utils';
import { digitalEmployeeActions } from './actions';
import { Action, PayloadData, SagaAction } from '../commonTypes';
import { PlatformRedirect } from './types';
import { contactUsActions } from '../contactUs/actions';
import { /*selectContactUsUI,*/ selectContactUsUserData } from '../contactUs/selectors';
import { CommonUtils } from 'utils/CommonUtils';
import { UrlParams } from 'services/OAuthService/dto/oauth-request.dto';

/* Helpers */
function* resetErrorDE() {
  yield put(
    digitalEmployeeActions.uiRefresh({
      errorMessage: '',
    })
  );
}

function* setErrorDE(errorMessage: string = '') {
  yield put(
    digitalEmployeeActions.uiRefresh({
      errorMessage,
    })
  );
}

/* Sagas */
function* sendCredentialsSaga() {
  const { email, first_name, last_name, organization } = yield select(selectUserData);
  const typeDE: string = String(window.location.pathname).split('/').pop() || '';
  yield call(resetErrorDE);

  const body: SendCredentialsBody = {
    email,
    name: `${first_name} ${last_name}`,
    organization,
    de_name: capitalize(typeDE),
  };
  const result: BaseResponse<{}> = yield call(DigitalEmployeeService.sendCredentials, body);
  if (result.error) {
    yield call(setErrorDE, result.error?.errorMessage);
    return;
  }

  yield put(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.verifyEmail));
}

function* verifyEmailSaga() {
  const { email, verification_code } = yield select(selectUserData);
  yield call(resetErrorDE);

  const body: VerifyEmailBody = {
    email,
    code: verification_code,
  };

  if (toString(verification_code).length !== 6) {
    yield call(setErrorDE, 'The length must be exactly 6');
    return;
  }

  if (!/\d{6}/.test(verification_code)) {
    yield call(setErrorDE, 'The verification code must contain only digits');
    return;
  }

  const result: BaseResponse<{}> = yield call(DigitalEmployeeService.verifyEmail, body);
  if (result.error) {
    yield call(setErrorDE, result.error?.errorMessage);
    return;
  }

  yield put(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.selectServices));
}

function* openLoginWindow(action: Action<any>) {
  const { provider, scope, openedWindow } = action.payload.data;
  yield call(resetErrorDE);

  yield put(
    digitalEmployeeActions.uiRefresh({
      loading: true,
      exchangeTokenError: false,
    })
  );

  const params: UrlParams = {
    provider,
    destination: oauthDestinationURL,
  };

  params.scope = '';
  if (!isEmpty(scope)) {
    params.scope = scope.join(',');
  }

  const result: BaseResponse<string> = yield call(OAuthService.getAuthURL, params);

  const url = result.data || '';
  yield put(digitalEmployeeActions.uiRefresh({ loading: false }));
  if (result.error) {
    yield call(setErrorDE, result.error?.errorMessage);
    return;
  }

  if (openedWindow && openedWindow.opener) {
    openedWindow.location.href = url;
  }
}

function* exchangeTokens(action: SagaAction<any>) {
  const { params } = action.payload.data;
  yield call(resetErrorDE);

  const queryString = CommonUtils.createQueryString(params);
  const oauthResult: BaseResponse<ExchangeTokens> = yield call(OAuthService.exchangeOAuthTokens, queryString);

  if (oauthResult.error) {
    yield call(setErrorDE, oauthResult.error?.errorMessage);
    yield put(
      digitalEmployeeActions.uiRefresh({
        loading: false,
        exchangeTokenError: true,
      })
    );
    return;
  }

  if (window.opener) {
    yield put(
      digitalEmployeeActions.uiRefresh({
        exchangeTokenError: false,
      })
    );

    window.opener.postMessage({ ...oauthResult.data, controlSum: CONTROL_SUM }, '*');
  } else {
    yield put(
      digitalEmployeeActions.uiRefresh({
        exchangeTokenError: true,
      })
    );
  }

  window.close();
}

function* completeOAuth(action: SagaAction<PayloadData<IExchangeTokenResult>>) {
  const tokens: IExchangeTokenResult = action.payload.data;

  const services = yield select(selectServicesData);
  const modifiedServices = DigitalEmployeeUtils.updateTokensDataInServices(services, tokens);

  yield put(digitalEmployeeActions.servicesRefresh(modifiedServices));
  yield put(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.messengerConfiguration));
}

function* applyDE() {
  const { projectID, user, services, messengers } = yield select((state: RootState) => state.digitalEmployeeData);

  yield call(resetErrorDE);

  const { first_name, last_name, ...restUser } = user;
  const userData = { ...restUser, name: `${first_name} ${last_name}` };
  const typeDE: string = String(window.location.pathname).split('/').pop() || '';

  const requestData = {
    ...userData,
    de_name: capitalize(typeDE),
    services,
    messengers,
  };

  const result: BaseResponse<{}> = yield call(DigitalEmployeeService.applyDigitalEmployee, projectID, requestData);
  if (result.error) {
    yield call(setErrorDE, result.error?.errorMessage);
    return;
  }

  // sending data to Hydra Webhook
  const { verification_code, ...webhookRequestData } = user;
  yield call(WebhookService.sendWebhook, webhookTokenNewDE, webhookRequestData);

  yield put(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.checkConfiguration));
}

function* checkConfigurationSaga() {
  const { email, verification_code } = yield select(selectUserData);
  const deID = yield select(selectDeID);
  const messengers = yield select(selectCurrentDEMessengers(deID));
  const messenger = messengers[0];

  yield call(resetErrorDE);

  const body: CheckConfigurationBody = {
    email,
    code: verification_code,
  };

  const result: BaseResponse<CheckConfigurationResponse> = yield call(DigitalEmployeeService.checkConfiguration, body);
  if (result.error) {
    yield call(setErrorDE, result.error?.errorMessage);
    return;
  }

  const resData = result.data as CheckConfigurationResponse;
  let isMessengerConnected = false;
  switch (messenger) {
    case MESSENGERS.slack:
      isMessengerConnected = resData.slack_connected;
      break;
    case MESSENGERS.teams:
      isMessengerConnected = resData.ms_teams_connected;
      break;
    case MESSENGERS.googleChat:
      isMessengerConnected = resData.google_chat_connected;
      break;
    default:
  }

  if (!isMessengerConnected) {
    yield call(setErrorDE, 'Messenger is not connected!');
    return;
  }

  yield put(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.finish));
}

function* platformRedirect(action: SagaAction<PayloadData<PlatformRedirect>>) {
  const { messenger, appID, code } = action.payload.data;

  const body: AddPlatformRequestDto = {
    messenger,
    appID,
    code,
  };

  const result: BaseResponse<AddPlatformResponseDto> = yield call(InteractionService.addPlatform, body);
  if (result.error) {
    console.log(result.error);
    return;
  }

  // window.location.href = routes.home;
}

function* contactUsSendFormSaga() {
  yield put(contactUsActions.contactUsUiRefresh({ errors: {} }));

  const userData = yield select(selectContactUsUserData);
  //const { loading, formErrors, success } = yield select(selectContactUsUI);

  const errors: any = {};

  if (!userData.first_name) {
    errors.first_name = 'Required field';
  }

  if (!userData.last_name) {
    errors.last_name = 'Required field';
  }

  if (!validateEmail(userData.email)) {
    errors.email = 'Email not valid';
  }

  if (!userData.email) {
    errors.email = 'Required field';
  }

  if (!userData.phone) {
    errors.phone = 'Required field';
  }

  if (!userData.company) {
    errors.company = 'Required field';
  }

  if (!userData.company_size) {
    errors.company_size = 'Required field';
  }

  if (!userData.subject) {
    errors.subject = 'Required field';
  }

  if (!userData.message) {
    errors.message = 'Required field';
  }

  if (Object.keys(errors).length) {
    yield put(contactUsActions.contactUsUiRefresh({ errors: errors }));
    return;
  }

  yield put(contactUsActions.contactUsUiRefresh({ loading: true }));

  const result: BaseResponse<{}> = yield call(WebhookService.sendWebhook, webhookContactUs, userData);

  if (result.error || !result.data) {
    //in webhookservice 404 don't throw error
    errors.main = result.error || 'The form did not send, please try again';
    yield put(contactUsActions.contactUsUiRefresh({ errors: errors, loading: false }));
    return;
  }

  yield put(contactUsActions.contactUsUiRefresh({ loading: false, success: true }));
  yield put(contactUsActions.contactUsFormReset());
}

function* verifyDE() {
  const typeDE: string = String(window.location.pathname).split('/').pop() || '';
  const { user, services, messengers } = yield select((state: RootState) => state.digitalEmployeeData);

  yield call(resetErrorDE);

  const { first_name, last_name, ...restUser } = user;
  const userData = { ...restUser, name: `${first_name} ${last_name}` };

  const requestData = {
    ...userData,
    de_name: capitalize(typeDE),
    services,
    messengers,
  };

  const result: BaseResponse<{}> = yield call(DigitalEmployeeService.verifyDigitalEmployee, requestData);

  if (result.error) {
    yield call(setErrorDE, result.error?.errorMessage);
    return;
  }

  yield put(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.messengerConfiguration));
}

export default function* digitalEmployeeSaga() {
  yield all([
    takeLatest(digitalEmployeeActions.SEND_CREDENTIALS, sendCredentialsSaga),
    takeLatest(digitalEmployeeActions.VERIFY_EMAIL, verifyEmailSaga),
    takeLatest(digitalEmployeeActions.DE_OPEN_LOGIN_WINDOW, openLoginWindow),
    takeLatest(digitalEmployeeActions.DE_EXCHANGE_TOKENS, exchangeTokens),
    takeLatest(digitalEmployeeActions.DE_COMPLETE_OAUTH, completeOAuth),
    takeLatest(digitalEmployeeActions.DE_CHECK_CONFIGURATION, checkConfigurationSaga),
    takeLatest(digitalEmployeeActions.DE_APPLY_DE, applyDE),
    takeLatest(digitalEmployeeActions.DE_VERIFY_DE, verifyDE),
    takeLatest(digitalEmployeeActions.DE_PLATFORM_REDIRECT, platformRedirect),
    takeLatest(digitalEmployeeActions.CONTACT_US_SEND_FORM, contactUsSendFormSaga),
  ]);
}
