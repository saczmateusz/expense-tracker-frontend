import * as React from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router';
import { AuthContext, AuthProvider } from './context/authContext';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <h1 className='text-3xl font-bold underline'> Hello world! </h1>

        <div className='flex flex-row gap-4'>
          <NavLink
            to='/public'
            className={({ isActive }) =>
              isActive ? 'text-red-500' : 'text-black'
            }
          >
            Public Page
          </NavLink>
          <NavLink
            to='/home'
            className={({ isActive }) =>
              isActive ? 'text-red-500' : 'text-black'
            }
          >
            Protected Home Page
          </NavLink>
        </div>

        <AuthButton />

        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/public' element={<PublicPage />} />
          <Route path='/home' element={<PrivateRoute />}>
            <Route index element={<ProtectedPage />} />
          </Route>
          {/* Catch-All for 404 */}
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Home Page visible after login</h3>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthButton() {
  let navigate = useNavigate();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          auth.signOut(() => {
            navigate('/');
          });
        }}
        className='rounded-md bg-indigo-400 px-3.5 py-1.5 text-white'
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function LoginPage() {
  let location = useLocation();
  let navigate = useNavigate();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/home' } };
  let login = () => {
    auth.signIn(() => {
      navigate(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
}
