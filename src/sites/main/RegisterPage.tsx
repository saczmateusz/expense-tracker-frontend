import * as React from 'react';
import { NavLink } from 'react-router';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>Register Page</h1>
      <NavLink to='/login' className='text-blue-950 font-bold'>
        Register
      </NavLink>{' '}
      or go back to the{' '}
      <NavLink to='/' className='text-blue-950 font-bold'>
        main page
      </NavLink>
    </div>
  );
};

export default RegisterPage;
