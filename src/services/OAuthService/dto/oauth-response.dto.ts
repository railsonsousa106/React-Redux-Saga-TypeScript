export interface ExchangeTokensExtra {
  instance_url?: string;
  cloud_id?: string;
  tenant_id?: string;
  company_id?: string;
}

export interface ExchangeTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires: string | number | Date;
  extra: ExchangeTokensExtra;
  scopes: string[];
  provider: string;
}
