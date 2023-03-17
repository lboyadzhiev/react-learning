import { getOptions } from './utils/getOptions';
import { request } from './utils/request';

export const settings = {
  host: 'https://expenses-2f187-default-rtdb.firebaseio.com/expenses.json',
};

export const get = async (url) => {
  return await request(url, getOptions);
};

export const post = async (url, data) => {
  return await request(url, getOptions('post', data));
};
