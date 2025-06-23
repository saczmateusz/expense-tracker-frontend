import * as React from 'react';
import { createContext } from 'react';
import { ExpenseType, useProvideExpense } from '../features/useProvideExpense';

export const ExpenseContext = createContext<ExpenseType | null>(null);

export const ExpenseProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const expense = useProvideExpense();
  return (
    <ExpenseContext.Provider value={expense}>
      {children}
    </ExpenseContext.Provider>
  );
};

export function useExpense() {
  return React.useContext(ExpenseContext);
}
