import { defaultConfig } from '../../config';
import { BaseService } from '../../services/BaseService/BaseService';
import { BaseResponse } from '../../services/BaseService/interfaces';
import { oauthURL } from '../../config';

import { UrlParams } from './dto/oauth-request.dto';
import { ExchangeTokens } from './dto/oauth-response.dto';

class OAuthService extends BaseService {
  constructor() {
    super();
    this.baseServiceURL = oauthURL;
    this.getAuthURL = this.getAuthURL.bind(this);
    this.exchangeOAuthTokens = this.exchangeOAuthTokens.bind(this);
  }

  async getAuthURL(params: UrlParams): Promise<BaseResponse<string>> {
    try {
      const response = await this.get<string, UrlParams>(
        '/url',
        {
          ...params,
        },
        defaultConfig
      );

      const result = { data: response?.data || '' };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }

  async exchangeOAuthTokens(queryString: string): Promise<BaseResponse<ExchangeTokens>> {
    try {
      const response = await this.post<ExchangeTokens>(`/token?${queryString}`, {}, defaultConfig);

      const result = { data: response?.data, error: response?.error };

      return Promise.resolve(result);
    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }
}

const ServiceInstance = new OAuthService();

export default ServiceInstance;
export { ServiceInstance as OAuthService };
