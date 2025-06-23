import React, { useEffect } from 'react';
import { ExpenseRange } from '../enums';
import { format } from 'date-fns';
import { useProvideExpense } from '../features/useProvideExpense';

type Props = {
  range: ExpenseRange;
};

const ExpenseList: React.FC<Props> = () => {
  const expenses = useProvideExpense();

  useEffect(() => {
    console.log('expenses.expenses', expenses.expenses);
  }, [expenses.expenses.length]);

  if (expenses.loading) return <div>Loading...</div>;
  if (expenses.error) return <div>Error occured while fetching data.</div>;

  return (
    <div className='w-full'>
      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 px-4 py-2 text-left'>Date</th>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Amount
            </th>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Category
            </th>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.expenses.map((ex) => (
            <tr className='hover:bg-gray-50' key={ex._id}>
              <td className='border border-gray-300 px-4 py-2'>
                {format(ex.dateCreated, 'dd.MM.yyyy')}
              </td>
              <td className='border border-gray-300 px-4 py-2 text-end'>
                {ex.value.toFixed(2)} {ex.currency}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {ex.category}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {ex.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
