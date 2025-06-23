import * as React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import PageHeader from '../../components/pageHeader/PageHeader';
import Button from '../../components/button/Button';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import SectionPanel from '../../components/sectionPanel/SectionPanel';
import ExpenseList from '../../entities/expense/components/ExpenseList';
import { ExpenseRange } from '../../entities/expense/enums';
import ExpenseForm from '../../entities/expense/components/ExpenseForm';
import { ExpenseProvider } from '../../entities/expense/context/expenseContext';

const HomePage: React.FC = () => {
  let navigate = useNavigate();
  let auth = useAuth();
  if (!auth) return;

  return (
    <div className='min-w-7xl'>
      <PageHeader
        title='My expenses'
        menu={
          <Button
            label='Sign out'
            action={() => {
              auth.signOut(() => {
                navigate('/');
              });
            }}
          />
        }
      />

      <ExpenseProvider>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col gap-4 w-3/5'>
            <SectionPanel header={<SectionHeader title='Your last expenses' />}>
              <ExpenseList range={ExpenseRange.All} />
              <div className='flex justify-end mt-4 text-cyan-700 cursor-pointer select-none'>
                Show full history...
              </div>
            </SectionPanel>

            <SectionPanel header={<SectionHeader title='This month' />}>
              <div className='flex justify-center text-2xl'>TBD...</div>
            </SectionPanel>
          </div>
          <div className='flex flex-col gap-4 w-2/5'>
            <SectionPanel header={<SectionHeader title='Add expense' />}>
              <ExpenseForm />
            </SectionPanel>
          </div>
        </div>
      </ExpenseProvider>
    </div>
  );
};

export default HomePage;
