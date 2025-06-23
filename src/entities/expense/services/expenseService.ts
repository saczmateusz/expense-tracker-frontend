import axios, { AxiosResponse } from 'axios';
import { ExpenseResponse } from '../types/expenseResponse';
import { CreateExpenseResponse } from '../types/createExpenseResponse';
import { ExpenseFormSchema } from '../features/useExpenseForm';

export const fetchExpensesRequest = (
  token: string
): Promise<AxiosResponse<ExpenseResponse>> => {
  return axios.get<ExpenseResponse>('http://localhost:3000/expenses/', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

export const createExpenseRequest = (
  body: ExpenseFormSchema,
  token: string
): Promise<AxiosResponse<CreateExpenseResponse>> => {
  return axios.post<CreateExpenseResponse>(
    'http://localhost:3000/expenses/',
    body,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
};
