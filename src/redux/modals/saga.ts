import { takeLatest, all, call, select, put } from 'redux-saga/effects';

import { WebhookService } from '../../services/WebhookService';

import { IAPIResponse } from '../../assets/interfaces/digitalEmployee';
import { webhookTokenFreeTrial } from '../../config';
import { modalsActions } from './actions';
import { selectFreeTrialData } from './selectors';

function* freeTrialModalSubmit() {
  const data = yield select(selectFreeTrialData);

  const result: IAPIResponse = yield call(WebhookService.sendWebhook, webhookTokenFreeTrial, data);
  if (result.error) {
    return;
  }

  yield put(modalsActions.freeTrialModalResetData());
}

export default function* modalsSaga() {
  yield all([takeLatest(modalsActions.MODALS_FREE_TRIAL_SUBMIT, freeTrialModalSubmit)]);
}
