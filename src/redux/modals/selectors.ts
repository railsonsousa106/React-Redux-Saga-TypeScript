import { RootState } from '../store';

export const selectDeployment = ({ modalsData }: RootState) => modalsData.deployment;

export const selectFreeTrialData = ({ modalsData }: RootState) => modalsData.freeTrial;

export const selectAuthModalData = ({ modalsData }: RootState) => modalsData.authModal;
