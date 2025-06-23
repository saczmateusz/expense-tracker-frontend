import { Expense } from './expense';

export type CreateExpenseResponse = {
  message: string;
  expense: Expense;
};
