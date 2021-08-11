import { defaultConfig } from '../../config';
import { API_ROUTES } from '../../constants/routes';
import { BaseService } from '../../services/BaseService/BaseService';
import { BaseResponse } from '../../services/BaseService/interfaces';

import { AddPlatformRequestDto } from './dto/addPlatform-request.dto';
import { AddPlatformResponseDto } from './dto/addPlatform-response.dto';

class InteractionService extends BaseService {
  constructor(url: string) {
    super(url);
    this.addPlatform = this.addPlatform.bind(this);
  }

  async addPlatform(body: AddPlatformRequestDto): Promise<any> {
    const baseURL = this.baseURL.replace('/api', '');
    const { messenger, appID } = body;
    try {
      const response = await this.get(`/${messenger}/add/${appID}`, body,
        {
          ...defaultConfig,
          baseURL,
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

const ServiceInstance = new InteractionService(API_ROUTES.interaction);

export default ServiceInstance;
export { ServiceInstance as InteractionService };
