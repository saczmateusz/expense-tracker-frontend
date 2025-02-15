import * as React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import PageHeader from '../../components/pageHeader/PageHeader';
import Button from '../../components/button/Button';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import SectionPanel from '../../components/sectionPanel/SectionPanel';
import ExpenseList from '../../entities/expense/components/ExpenseList';
import { ExpenseRange } from '../../entities/expense/enums';

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

      <div className='flex flex-row gap-4'>
        <div className='w-3/5'>
          <SectionPanel header={<SectionHeader title='Your expenses' />}>
            <ExpenseList range={ExpenseRange.All} />
          </SectionPanel>
        </div>
        <div className='w-2/5'>
          <SectionPanel header={<SectionHeader title='Add expense' />}>
            form placeholder
          </SectionPanel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
