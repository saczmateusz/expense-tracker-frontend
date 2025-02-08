import * as React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';

const HomePage: React.FC = () => {
  let navigate = useNavigate();
  let auth = useAuth();
  if (!auth) return;

  return (
    <div className='min-w-7xl'>
      <h1 className='text-3xl my-5'>Home Page</h1>

      <div>Logged in...</div>

      <div>
        <p>
          Welcome!{' '}
          <button
            onClick={() => {
              auth.signOut(() => {
                navigate('/');
              });
            }}
            className='rounded-md bg-indigo-400 px-3.5 py-1.5 text-white cursor-pointer'
          >
            Sign out
          </button>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
