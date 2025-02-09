import * as React from 'react';
import { NavLink, useNavigate } from 'react-router';
import TextField from '../../../components/input/TextField';
import { FieldErrors } from 'react-hook-form';
import { RegisterFormSchema, useRegisterFormHook } from './useRegisterFormHook';
import { registerRequest } from '../../../services/authService';
import { CustomAxiosError } from '../../../types/ErrorResponse';

const RegisterPage: React.FC = () => {
  let navigate = useNavigate();

  const [error, setError] = React.useState<string>();

  const registerForm = useRegisterFormHook();

  const onSubmit = (values: RegisterFormSchema): void => {
    setError(undefined);
    registerRequest(values).then(
      (response) => {
        console.log('Successful register:', response.data.message);
        navigate({ pathname: '/login' });
      },
      (e: CustomAxiosError) => {
        setError(e.response?.data?.message);
      }
    );
  };

  const onError = (e?: FieldErrors<RegisterFormSchema>): void => {
    console.log('Validation error:', e);
  };

  return (
    <div>
      <h1 className='text-3xl my-5'>Register Page</h1>

      <div className='flex flex-col'>
        <form onSubmit={registerForm.handleSubmit(onSubmit, onError)}>
          <TextField
            control={registerForm.control}
            name='firstName'
            label='First name'
          />
          <TextField
            control={registerForm.control}
            name='lastName'
            label='Last name'
          />
          <TextField
            control={registerForm.control}
            name='email'
            label='E-mail'
          />
          <TextField
            control={registerForm.control}
            name='password'
            label='Password'
            type='password'
          />
          <TextField
            control={registerForm.control}
            name='confirmPassword'
            label='Confirm password'
            type='password'
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
            Register
          </button>
        </form>
      </div>
      <div>
        Go back to the{' '}
        <NavLink to='/' className='text-blue-950 font-bold'>
          main page
        </NavLink>{' '}
        or{' '}
        <NavLink to='/login' className='text-blue-950 font-bold'>
          log in now
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterPage;
