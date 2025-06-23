import { useEffect, useState } from 'react';
import { Expense } from '../types/expense';
import { CustomAxiosError } from '../../../types/ErrorResponse';
import { fetchExpensesRequest } from '../services/expenseService';
import { useAuth } from '../../../context/authContext';

export type ExpenseType = {
  expenses: Array<Expense>;
  loading: boolean;
  error: boolean;
  fetchExpenses: () => void;
};

export const useProvideExpense = (): ExpenseType => {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const auth = useAuth();

  const fetchExpenses = (filters?: any) => {
    console.log('Fetch expenses for user...');
    console.log(filters); // TODO: handle filters
    fetchExpensesRequest(auth?.token || '').then(
      (res) => {
        setExpenses(res.data);
        setLoading(false);
        setError(false);
      },
      (e: CustomAxiosError) => {
        console.log('Fetch error:', e);
        setLoading(false);
        setError(true);
      }
    );
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return { expenses, loading, error, fetchExpenses };
};
