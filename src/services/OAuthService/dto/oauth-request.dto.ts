export interface ExchangeParams {
  code: string;
  [propName: string]: string;
}

export interface UrlParams {
  provider: string;
  destination: string;
  scope?: string;
}
