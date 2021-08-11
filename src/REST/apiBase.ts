import axios from 'axios/index';

const { REACT_APP_URL_API_DEV }: any = process.env;

const apiBase = axios.create({
  baseURL: `${REACT_APP_URL_API_DEV}`
});

export default apiBase;
