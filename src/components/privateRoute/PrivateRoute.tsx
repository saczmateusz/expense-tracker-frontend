import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../context/authContext';

const PrivateRoute: React.FC = () => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth) return;

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default PrivateRoute;
