import { SERVICES } from '../../assets/interfaces/digitalEmployee';
import { DE_TYPES } from '../../constants/digitalEmployee';
import { RootState } from '../store';
import { Services } from './types';

export const selectCurrentStep = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.currentStep;

export const selectUserData = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.user;

export const selectProjectID = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.projectID;

export const selectDeID = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.deID;

export const selectDEsByType = (type: DE_TYPES) => ({ digitalEmployeeData }: RootState) =>
  digitalEmployeeData.availableDE.filter(de => de.type === type);

export const selectCurrentDEServices = (deID: string) => ({ digitalEmployeeData }: RootState) =>
  digitalEmployeeData.availableDE.find(de => de.deID === deID)?.services;

export const selectCurrentDEMessengers = (deID: string) => ({ digitalEmployeeData }: RootState) =>
  digitalEmployeeData.availableDE.find(de => de.deID === deID)?.messengers;

export const selectServicesData = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.services;

export const selectMessengersData = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.messengers;

export const selectServicesDataByName = (serviceType: SERVICES) => ({ digitalEmployeeData }: RootState) =>
  digitalEmployeeData.services.find(({ name }: Services) => name === serviceType);

export const selectDigitalEmployeeUI = ({ digitalEmployeeData }: RootState) => digitalEmployeeData.ui;
