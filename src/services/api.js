import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ukrhouse.pp.ua/api',
});
