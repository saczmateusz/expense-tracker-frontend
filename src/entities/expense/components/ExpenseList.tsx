import React from 'react';
import { ExpenseRange } from '../enums';
import { useFetchExpenses } from '../features/useFetchExpenses';

type Props = {
  range: ExpenseRange;
};

const ExpenseList: React.FC<Props> = ({ range }) => {
  const expenses = useFetchExpenses(range);

  if (expenses.loading) return <div>Loading...</div>;
  if (expenses.error) return <div>Error occured while fetching data.</div>;

  return (
    <div className='w-full'>
      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Category
            </th>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Value
            </th>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Currency
            </th>
            <th className='border border-gray-300 px-4 py-2 text-left'>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.expenses.map((ex) => (
            <tr className='hover:bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>
                {ex.category}
              </td>
              <td className='border border-gray-300 px-4 py-2'>{ex.value}</td>
              <td className='border border-gray-300 px-4 py-2'>
                {ex.currency}
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
