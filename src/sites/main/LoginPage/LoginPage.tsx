import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { FieldErrors } from 'react-hook-form';
import { useAuth } from '../../../context/authContext';
import { LoginFormSchema, useLoginFormHook } from './useLoginFormHook';
import TextField from '../../../components/input/TextField';
import { CustomAxiosError } from '../../../types/ErrorResponse';

const LoginPage: React.FC = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let auth = useAuth();
  if (!auth) return;

  const [error, setError] = React.useState<string>();

  const loginForm = useLoginFormHook();

  let { from } = location.state || { from: { pathname: '/home' } };

  let login = (values: LoginFormSchema) => {
    auth.signIn(
      values,
      () => {
        navigate(from);
      },
      (e: CustomAxiosError) => {
        setError(e.response?.data?.message);
      }
    );
  };

  const onSubmit = (values: LoginFormSchema): void => {
    setError(undefined);
    login(values);
  };

  const onError = (e?: FieldErrors<LoginFormSchema>): void => {
    console.log('Validation error:', e);
  };

  return (
    <div>
      <h1 className='text-3xl my-5'>Login Page</h1>

      <div className='flex flex-col'>
        <form onSubmit={loginForm.handleSubmit(onSubmit, onError)}>
          <TextField control={loginForm.control} name='email' label='E-mail' />
          <TextField
            control={loginForm.control}
            name='password'
            label='Password'
            type='password'
          />

          {Boolean(error) && (
            <div className='my-2.5 px-3 py-1.5 bg-red-300 border-0 rounded-md'>
              E-mail or password invalid!
            </div>
          )}

          <button
            type='submit'
            className='rounded-md bg-indigo-400 my-2.5 px-3.5 py-1.5 text-white cursor-pointer'
          >
            Log in
          </button>
        </form>
      </div>
      <div>
        Go back to the{' '}
        <NavLink to='/' className='text-blue-950 font-bold'>
          main page
        </NavLink>{' '}
        or{' '}
        <NavLink to='/register' className='text-blue-950 font-bold'>
          register now
        </NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
