import axios, { AxiosError, AxiosResponse, AxiosInstance } from 'axios';
import { apiURL } from '../../config';
import { isPlainObject } from 'lodash';
import { BaseConfig, BaseResponse, ProcessError } from './interfaces';

export class BaseService {
  baseServiceURL = apiURL;

  constructor(url: string = '') {
    if (url) {
      this.baseServiceURL = `${apiURL}${url}`;
    }

    this.createError = this.createError.bind(this);
    this.processError = this.processError.bind(this);
    this.processResponse = this.processResponse.bind(this);

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  get baseURL(): string {
    return this.baseServiceURL;
  }

  get agent(): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
    });
  }

  createError(errorMessage: string): AxiosError {
    const error: AxiosError = {
      name: 'Custom error',
      message: errorMessage,
      config: {},
      isAxiosError: true,
      toJSON: () => ({}),
    }
  
    return error;
  }

  processError(error: AxiosError): ProcessError {
    const status = error?.response?.status || null;

    const axiosError = error?.response?.data?.error;
    const errorMessage = error?.message;

    let resultError = axiosError;
    if (isPlainObject(axiosError)) {
      resultError = Object.keys(axiosError)
        .map(key => {
          return `${key}: ${JSON.stringify(axiosError[key])}`;
        })
        .join('; ');
    }

    return {
      errorMessage: resultError || errorMessage,
      status,
    };
  }

  processResponse<T>(response: AxiosResponse): T {
    const axiosData = response?.data;
    const data = axiosData?.data;

    return data || axiosData;
  }

  async get<T, P>(url: string, params: P, config: BaseConfig = {}): Promise<BaseResponse<T>> {
    try {
      const response = await this.agent.get(url, {
        params,
        ...config,
      });

      const result: BaseResponse<T> = {
        data: this.processResponse<T>(response),
      };
      return Promise.resolve(result);
    } catch (error) {
      const result: BaseResponse<T> = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async post<T, D = {}>(url: string, data: D, config: BaseConfig = {}): Promise<BaseResponse<T>> {
    try {
      const response = await this.agent.post(
        url,
        {
          ...data,
        },
        { ...config }
      );

      const result: BaseResponse<T> = {
        data: this.processResponse<T>(response),
      };
      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async put<T, D = {}>(url: string, data: D, config: BaseConfig = {}): Promise<BaseResponse<T>> {
    try {
      const response = await this.agent.put(
        url,
        {
          ...data,
        },
        { ...config }
      );

      const result: BaseResponse<T> = {
        data: this.processResponse<T>(response),
      };
      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async delete<T>(url: string, config: BaseConfig = {}): Promise<BaseResponse<T>> {
    try {
      const response = await this.agent.delete(url, { ...config });

      const result: BaseResponse<T> = {
        data: this.processResponse<T>(response),
      };
      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }
}
