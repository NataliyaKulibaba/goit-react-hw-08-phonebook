import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ redirectPath = '/contacts' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
