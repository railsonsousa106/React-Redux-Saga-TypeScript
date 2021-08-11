import { Messengers, Services } from '../../../redux/digitalEmployee/types';

export interface ApplyBody {
  name: string;
  email: string;
  organization: string;
  verification_code: string;
  services: Services[];
  messengers: Messengers[];
}

export interface VerifyBody {
  services: Services[];
}

export interface SendCredentialsBody {
  email: string;
  name: string;
  organization: string;
  de_name: string;
}

export interface VerifyEmailBody {
  email: string;
  code: string | number;
}

export interface CheckConfigurationBody {
  email: string;
  code: string | number;
}
