import cloneDeep from 'lodash/cloneDeep';
import { IExchangeTokenResult } from 'assets/interfaces/digitalEmployee';
import { Services } from '../redux/digitalEmployee/types';

class DigitalEmployeeUtils {
  static updateTokensDataInServices(services: Services[], tokens: IExchangeTokenResult) {
    const { provider, extra, ...restTokens } = tokens;
    let servicesRes = cloneDeep(services);

    if (servicesRes.length === 0) {
      servicesRes.push({
        name: provider || '',
        params: {
          oauth: {
            provider: provider || '',
            ...restTokens,
            extra,
          },
        },
      });
      return servicesRes;
    }

    return servicesRes.map((service: Services) => {
      if (service.name !== provider) {
        return service;
      }

      service.params = {
        oauth: {
          provider: provider || '',
          ...restTokens,
          extra,
        },
      };
      return service;
    });
  }
}

export { DigitalEmployeeUtils };
