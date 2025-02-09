import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthProvider } from './context/authContext';
import HomePage from './sites/home/HomePage';
import LoginPage from './sites/main/LoginPage/LoginPage';
import MainPage from './sites/main/MainPage';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import RegisterPage from './sites/main/RegisterPage/RegisterPage';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          {/* Catch-All for 404 */}
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
