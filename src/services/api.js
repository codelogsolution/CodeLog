import axios from 'axios';

const API_URL = 'https://dummyjson.com/';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: API_URL,
  headers: DEFAULT_HEADERS,
});

instance.interceptors.request.use(async request => {
  return request;
});

export default instance;
