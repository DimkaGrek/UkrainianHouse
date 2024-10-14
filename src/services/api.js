import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ukrhouse.pp.ua/api',
});
