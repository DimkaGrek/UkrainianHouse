import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsLoggedIn } from '../my-redux/Auth/authSlice';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (isLoggedIn && location.pathname.includes('/auth/')) {
    return <Navigate to={'/admin/news' || location.state?.from} />;
  }

  return children;
};
