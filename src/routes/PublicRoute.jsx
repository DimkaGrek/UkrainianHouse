import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsLoggedIn } from '../my-redux';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (isLoggedIn && location.pathname.includes('/auth/')) {
    return <Navigate to={location.state?.from || '/admin/news'} />;
  }

  return children;
};
