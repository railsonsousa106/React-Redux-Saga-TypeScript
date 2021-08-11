export interface ProcessError {
  errorMessage: string;
  status: number | null;
}

export interface BaseResponse<T> {
  data?: T;
  error?: ProcessError;
}

export interface BaseConfig {
  baseURL?: string;
  headers?: {
    [keyName: string]: any;
  };
}
