import React from 'react';
import { useAuth } from '../../../context/authContext';
import {
  ExpenseFormSchema,
  useExpenseFormHook,
  CategoryEnum,
} from '../features/useExpenseForm';
import { FieldErrors } from 'react-hook-form';
import TextField from '../../../components/input/TextField';
import { CustomAxiosError } from '../../../types/ErrorResponse';
import { createExpenseRequest } from '../services/expenseService';
import DateField from '../../../components/input/DateField';
import DropdownField from '../../../components/input/DropdownField';
import { useProvideExpense } from '../features/useProvideExpense';

const ExpenseForm: React.FC = () => {
  let auth = useAuth();
  if (!auth) return;

  const expenses = useProvideExpense();

  const [error, setError] = React.useState<string>();

  const expenseForm = useExpenseFormHook();

  const saveExpense = (values: ExpenseFormSchema) => {
    createExpenseRequest(values, auth?.token || '').then(
      (res) => {
        // success TODO
        console.log('res:', res);
        expenses.fetchExpenses();
      },
      (e: CustomAxiosError) => {
        setError(e.response?.data?.message);
      }
    );
  };

  const onSubmit = (values: ExpenseFormSchema): void => {
    setError(undefined);
    saveExpense(values);
  };

  const onError = (e?: FieldErrors<ExpenseFormSchema>): void => {
    console.log(expenseForm.getValues());

    console.log('Validation error:', e);
  };
  return (
    <div className='flex flex-col w-full'>
      <form onSubmit={expenseForm.handleSubmit(onSubmit, onError)}>
        <TextField
          control={expenseForm.control}
          name='value'
          label='Amount'
          type='number'
        />
        <TextField
          control={expenseForm.control}
          name='description'
          label='Description'
        />
        <DropdownField
          control={expenseForm.control}
          name='category'
          label='Category'
          options={CategoryEnum.options}
        />
        <DateField
          control={expenseForm.control}
          name='dateCreated'
          label='Date'
        />

        {Boolean(error) && (
          <div className='my-2.5 px-3 py-1.5 bg-red-300 border-0 rounded-md'>
            {error}
          </div>
        )}

        <button
          type='submit'
          className='rounded-md bg-indigo-400 my-2.5 px-3.5 py-1.5 text-white cursor-pointer'
        >
          Save expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
