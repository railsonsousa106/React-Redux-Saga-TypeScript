export interface IExchangeTokenRequestParams {
  code: string;
  [propName: string]: string;
}

export interface IApplyDERequestBodyServiceItemParams {
  subdomain?: string; //for ServiceNow | ZenDesk | SalesForce
  username?: string; // for ServiceNow | ZenDesk
  password?: string; // for ServiceNow | ZenDesk
  access_token?: string; // for QuickBooks | SalesForce | PandaDoc
  refresh_token?: string; // for QuickBooks | SalesForce | PandaDoc
  expires?: string | number; // for QuickBooks | SalesForce | PandaDoc
  company_id?: string | number; // for QucikBooks
  instance_url?: string; // for SalesForce
  cloud_id?: string | number; // for Jira
  tenant_id?: string | number; // for Xero
}

export interface IApplyDERequestBodyServiceItem {
  name: string;
  params: IApplyDERequestBodyServiceItemParams;
}

export interface IApplyDERequestBodyMessengerItemParams {
  app_id?: string | number; // for Slack
  client_id?: string | number; // for Slack
  client_secret?: string; // for Slack
  signing_secret?: string; // for Slack
}

export interface IApplyDERequestBodyMessengerItem {
  name: string;
  params: IApplyDERequestBodyMessengerItemParams;
}

export interface IApplyDERequestBody {
  name: string;
  email: string;
  verification_code: string;
  organization: string;
  services: IApplyDERequestBodyServiceItem[];
  messengers: IApplyDERequestBodyMessengerItem[];
}

export interface IErrorResponse {
  status?: string | number;
  message?: string;
  [propName: string]: unknown;
}

export interface ExchangeTokensExtra {
  instance_url?: string;
  cloud_id?: string;
  tenant_id?: string;
  company_id?: string;
}

export interface IExchangeTokenResult {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  expires?: string | number;
  extra?: ExchangeTokensExtra;
  scopes?: string[];
  provider?: string;
}

export enum MESSENGERS {
  slack = 'slack',
  teams = 'teams',
  googleChat = 'googleChat',
}

export enum SERVICES {
  jira = 'jira',
  snow = 'servicenow',
  zendesk = 'zendesk',
  salesforce = 'salesforce',
  hubspot = 'hubspot',
  quickbooks = 'quickbooks',
  pandadoc = 'pandadoc',
  xero = 'xero',
  googleCalendar = 'google_calendar'
}

export enum DEPLOYMENT_STAGE {
  creation = 'creation',
  integration = 'integration',
}

export interface ISendCredentialsBody {
  email: string;
  name: string;
  organization: string;
  de_name: string;
}

export interface IVerifyEmailBody {
  email: string;
  code: string | number;
}

export interface ICheckConfigurationBody {
  email: string;
  code: string | number;
}

export interface IAuthURL {
  provider: string;
  scope: string[];
  verify: boolean;
}

export interface IWebhookBody {
  company_size?: string;
  phone?: string;
  [keyName: string]: any;
}

export interface IAPIResponse {
  error?: string;
  data?: any;
}
