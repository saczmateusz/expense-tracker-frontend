import axios, { AxiosResponse } from 'axios';
import { ExpenseResponse } from '../types/expenseResponse';

export const fetchExpensesRequest = (
  token: string
): Promise<AxiosResponse<ExpenseResponse>> => {
  return axios.get<ExpenseResponse>('http://localhost:3000/expenses/', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
