import * as React from 'react';
import { NavLink } from 'react-router';
import PageHeader from '../../components/pageHeader/PageHeader';

const MainPage: React.FC = () => {
  return (
    <div className='min-w-7xl'>
      <PageHeader title='Main Page' />

      <div>
        Go to the{' '}
        <NavLink to='/login' className='text-blue-950 font-bold'>
          Login Page
        </NavLink>{' '}
        or{' '}
        <NavLink to='/register' className='text-blue-950 font-bold'>
          register now
        </NavLink>
        .
      </div>
    </div>
  );
};

export default MainPage;
