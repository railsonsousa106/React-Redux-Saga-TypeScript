import { RootState } from '../store';

export const selectContactUsUserData = ({ contactUsData }: RootState) => contactUsData.user;

export const selectContactUsUI = ({ contactUsData }: RootState) => contactUsData.ui;
