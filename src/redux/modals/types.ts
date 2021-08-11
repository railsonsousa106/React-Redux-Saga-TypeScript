import { OpenModalStatus } from '../../constants/modals';
import { DEPLOYMENT_STAGE, MESSENGERS } from '../../assets/interfaces/digitalEmployee';

export interface ModalToogle {
  visible: boolean;
}

export interface DeploymentModalData {
  messenger: keyof typeof MESSENGERS;
  stage: keyof typeof DEPLOYMENT_STAGE;
}

export interface FreeTrialModalData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  company_size: string;
  subject: string;
}

export interface PayloadStatus {
  status: OpenModalStatus;
}
