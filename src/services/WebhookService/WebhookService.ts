import { defaultConfig } from '../../config';
import { API_ROUTES } from '../../constants/routes';
import { BaseService } from '../../services/BaseService/BaseService';
import { BaseResponse } from '../../services/BaseService/interfaces';

import { WebhookBody } from './dto/webhook-request.dto';
import { WebhookResponse } from './dto/webhook-response.dto';

class WebhookService extends BaseService {
  constructor(url: string) {
    super(url);
    this.sendWebhook = this.sendWebhook.bind(this);
  }

  async sendWebhook(token: string, body: WebhookBody): Promise<BaseResponse<WebhookResponse>> {
    try {
      const response = await this.post<WebhookResponse>('', body,
        {
          ...defaultConfig,
          headers: {
            ...defaultConfig.headers,
            'Authorization': token,
          },
        },
      );

      const result = { data: response?.data };

      return Promise.resolve(result);

    } catch (error) {
      const result = { error: this.processError(error) };
      return Promise.resolve(result);
    }
  }
}

const ServiceInstance = new WebhookService(API_ROUTES.webhook);

export default ServiceInstance;
export { ServiceInstance as WebhookService };
