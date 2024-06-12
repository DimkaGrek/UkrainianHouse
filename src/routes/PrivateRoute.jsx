import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};
