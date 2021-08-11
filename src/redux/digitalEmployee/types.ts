import { ExchangeTokensExtra, MESSENGERS, SERVICES } from '../../assets/interfaces/digitalEmployee';
import { DE_STEPS_KEYS, DE_TYPES } from '../../constants/digitalEmployee';

export interface OpenLoginWindow {
  provider: string;
  scope?: string[];
  verify?: boolean;
  openedWindow: Window | null;
}

export interface ExchangeTokens {
  params: { [propName: string]: unknown };
}

export interface CompleteOAuth {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  expires?: string | number;
  extra?: ExchangeTokensExtra;
  scopes?: string[];
  provider?: string;
}

export interface PlatformRedirect {
  messenger: string;
  appID: string;
  code: string;
}

export interface User {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  company_size?: string;
  password?: string;
  verification_code?: string;
}

export interface DE {
  id: number;
  deID: string;
  type: DE_TYPES;
  services: Array<SERVICES>;
  messengers: Array<MESSENGERS>;
  title: string;
}

export interface Service {
  subdomain?: string;
  username?: string;
  password?: string;
  access_token?: string;
  refresh_token?: string;
  expires_at?: string | number;
  company_id?: string;
  instance_url?: string;
  cloud_id?: string;
  tenant_id?: string;
  provider?: string;
}

export interface OAuthPayload {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  scopes?: string[];
  expires_at?: string | number;
  provider?: string;
  extra?: ExtraParams;
}

export interface ServicePayload {
  oauth?: OAuthPayload;
  subdomain?: string;
  username?: string;
  password?: string;
}

export interface ExtraParams {
  company_id?: string;
  instance_url?: string;
  cloud_id?: string;
  tenant_id?: string;
}

export interface Services {
  name: string;
  params: Service | ServicePayload;
}

export interface PayloadServices {
  services: Services[];
}

export interface PayloadService {
  service: Services;
}

export interface Messenger {
  app_id?: string;
  app_secret?: string;
  client_id?: string;
  client_secret?: string;
  signing_secret?: string;
}

export interface Messengers {
  name: string;
  params: Messenger;
}

export interface PayloadMessengers {
  messengers: Messengers[];
}

export interface PayloadMessenger {
  messenger: Messengers;
}

export interface UI {
  loading?: boolean;
  exchangeTokenError?: boolean;
  errorMessage?: string;
  [propName: string]: unknown;
}

export interface PayloadUI {
  ui: UI;
}

export interface DigitalEmployee {
  currentStep: DE_STEPS_KEYS;
  availableDE: DE[];
  projectID: number | null;
  deID: string | null;
  user: User;
  services: Services[];
  messengers: Messengers[];
  ui: UI;
}

export interface CurrentStep {
  currentStep: string;
}

export interface DEID {
  deID: string;
}

export interface ProjectID {
  projectID: number;
}

export interface PayloadUser {
  user: User;
}
