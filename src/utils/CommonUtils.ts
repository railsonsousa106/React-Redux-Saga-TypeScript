import { keys, isEmpty } from 'lodash';

class CommonUtils {
  
	static createQueryString = (queryParams: any = {}) => {
		if (isEmpty(queryParams)) {
			return '';
		}

		const queryArray = keys(queryParams).map((key, index) => {
			return (index === 0) ? `${key}=${queryParams[key]}` : `&${key}=${queryParams[key]}`;
		});

		return queryArray.join('');
	}
}

export { CommonUtils };
