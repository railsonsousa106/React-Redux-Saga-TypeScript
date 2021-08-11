import { OpenModalStatus } from '../../constants/modals';
import { Action, PayloadData } from '../commonTypes';
import { DeploymentModalData, ModalToogle, FreeTrialModalData, PayloadStatus } from './types';

const prefix = '[Modals]';

const TYPES = {
  MODALS_DEPLOYMENT_TOGGLE: `${prefix} modals-deployment-toggle`,
  MODALS_DEPLOYMENT_DATA_SET: `${prefix} modals-deployment-data-set`,

  MODALS_AUTH_STATUS_REFRESH: `${prefix} modals-auth-status-refresh`,

  MODALS_FREE_TRIAL_TOGGLE: `${prefix} modals-free-trial-toggle`,
  MODALS_FREE_TRIAL_DATA_SET: `${prefix} modals-free-trial-data-set`,
  MODALS_FREE_TRIAL_RESET: `${prefix} modals-free-trial-reset`,
  MODALS_FREE_TRIAL_SUBMIT: `${prefix} modals-free-trial-submit`,
};

export const modalsActions = {
  ...TYPES,
  deploymentModalToggle: (visible: boolean): Action<ModalToogle> => ({
    type: TYPES.MODALS_DEPLOYMENT_TOGGLE,
    payload: { visible },
  }),
  deploymentModalSetData: (data: DeploymentModalData): Action<PayloadData<DeploymentModalData>> => ({
    type: TYPES.MODALS_DEPLOYMENT_DATA_SET,
    payload: { data },
  }),

  freeTrialModalToggle: (visible: boolean): Action<ModalToogle> => ({
    type: TYPES.MODALS_FREE_TRIAL_TOGGLE,
    payload: { visible },
  }),
  freeTrialModalSetData: (data: FreeTrialModalData): Action<PayloadData<FreeTrialModalData>> => ({
    type: TYPES.MODALS_FREE_TRIAL_DATA_SET,
    payload: { data },
  }),
  freeTrialModalResetData: (): Action => ({
    type: TYPES.MODALS_FREE_TRIAL_RESET,
  }),
  freeTrialModalSubmit: (): Action => ({
    type: TYPES.MODALS_FREE_TRIAL_SUBMIT,
  }),
  authModalStatusRefresh: (status: OpenModalStatus): Action<PayloadStatus> => ({
    type: TYPES.MODALS_AUTH_STATUS_REFRESH,
    payload: { status },
  }),
};
