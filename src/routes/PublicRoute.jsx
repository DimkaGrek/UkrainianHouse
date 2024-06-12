import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  const location = useLocation();

  if (isLoggedIn && location.pathname.includes('/auth/')) {
    return <Navigate to={'/admin/news' || location.state?.from} />;
  }

  return children;
};
