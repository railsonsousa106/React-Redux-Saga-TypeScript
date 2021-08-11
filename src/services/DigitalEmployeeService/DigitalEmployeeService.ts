import { BaseResponse } from 'services/BaseService/interfaces';
import { defaultConfig } from '../../config';
import { API_ROUTES } from '../../constants/routes';
import { BaseService } from '../../services/BaseService/BaseService';
import {
  ApplyBody,
  SendCredentialsBody,
  VerifyEmailBody,
  CheckConfigurationBody,
  VerifyBody,
} from './dto/digitalEmployee-request.dto';
import { CheckConfigurationResponse } from './dto/digitalEmployee-response.dto';

class DigitalEmployeeService extends BaseService {
  constructor(url: string) {
    super(url);
    this.applyDigitalEmployee = this.applyDigitalEmployee.bind(this);
    this.verifyDigitalEmployee = this.verifyDigitalEmployee.bind(this);
    this.sendCredentials = this.sendCredentials.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.checkConfiguration = this.checkConfiguration.bind(this);
  }

  async applyDigitalEmployee(projectID: number | null, body: ApplyBody): Promise<BaseResponse<unknown>> {
    try {
      const response = await this.post<unknown, ApplyBody>(`/${projectID}/apply`, body, defaultConfig);

      if (response?.error?.status) {
        const { ...rawData } = response?.error;
        const data: { [keyName: string]: any } = rawData || {};

        const errorMessage: string = Object.keys(data).reduce((acc, keyValue) => {
          return acc.concat(`${keyValue}: ${data[keyValue]}\n`);
        }, '');

        const error = this.createError(errorMessage);

        throw error;
      }

      const result = { data: response?.data || '' };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async verifyDigitalEmployee(body: VerifyBody): Promise<BaseResponse<unknown>> {
    try {
      const response = await this.post<unknown, VerifyBody>(`/services/verify`, body, defaultConfig);

      if (response?.error?.status) {
        const { ...rawData } = response?.error;
        const data: { [keyName: string]: any } = rawData || {};

        const errorMessage: string = Object.keys(data).reduce((acc, keyValue) => {
          return acc.concat(`${keyValue}: ${data[keyValue]}\n`);
        }, '');

        const error = this.createError(errorMessage);

        throw error;
      }

      const result = { data: response?.data || '' };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async sendCredentials(body: SendCredentialsBody): Promise<BaseResponse<unknown>> {
    try {
      const response = await this.put<unknown, SendCredentialsBody>(`/verification`, body, defaultConfig);

      if (response?.error?.status) {
        const { ...rawData } = response?.error;
        const data: { [keyName: string]: any } = rawData || {};

        const errorMessage: string = Object.keys(data).reduce((acc, keyValue) => {
          return acc.concat(`${keyValue}: ${data[keyValue]}\n`);
        }, '');

        const error = this.createError(errorMessage);

        throw error;
      }

      const result = { data: response?.data || '' };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async verifyEmail(body: VerifyEmailBody): Promise<BaseResponse<unknown>> {
    try {
      const response = await this.post<unknown, VerifyEmailBody>(`/verification`, body, defaultConfig);

      if (response?.error?.status) {
        const { ...rawData } = response?.error;
        const data: { [keyName: string]: any } = rawData || {};

        const errorMessage: string = Object.keys(data).reduce((acc, keyValue) => {
          return acc.concat(`${keyValue}: ${data[keyValue]}\n`);
        }, '');

        const error = this.createError(errorMessage);

        throw error;
      }

      const result = { data: response?.data || '' };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async checkConfiguration(body: CheckConfigurationBody): Promise<BaseResponse<CheckConfigurationResponse>> {
    try {
      const response = await this.post<CheckConfigurationResponse, CheckConfigurationBody>(
        `/configuration/check`,
        body,
        defaultConfig
      );

      if (response?.error?.status) {
        const { ...rawData } = response?.error;
        const data: { [keyName: string]: any } = rawData || {};

        const errorMessage: string = Object.keys(data).reduce((acc, keyValue) => {
          return acc.concat(`${keyValue}: ${data[keyValue]}\n`);
        }, '');

        const error = this.createError(errorMessage);

        throw error;
      }

      const result = { data: response.data };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }
}

const ServiceInstance = new DigitalEmployeeService(API_ROUTES.digitalEmployee);

export default ServiceInstance;
export { ServiceInstance as DigitalEmployeeService };
