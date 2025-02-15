import { useEffect, useState } from 'react';
import { ExpenseRange } from '../enums';
import { Expense } from '../types/expense';
import { useAuth } from '../../../context/authContext';
import { fetchExpensesRequest } from '../services/expenseService';
import { CustomAxiosError } from '../../../types/ErrorResponse';

export const useFetchExpenses = (range: ExpenseRange) => {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const auth = useAuth();

  useEffect(() => {
    console.log('Fetch expenses for user...');
    console.log(range); // TODO: handle ranges
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
  }, []);

  return { expenses, loading, error };
};
