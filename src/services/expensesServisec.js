import { get, post, settings } from './rootApi/api';

const host = settings.host;

export const getExpenses = async () => {
  return await get(host);
};

export const createExpense = async (data) => {
  console.log(data);
  return await post(host, data);
};
