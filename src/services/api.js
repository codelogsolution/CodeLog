import axios from 'axios';
import Config from 'react-native-config';

// const API_URL = 'https://dummyjson.com/';
const {API_URL} = Config;

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
