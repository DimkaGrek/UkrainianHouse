import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from './Loader/Loader';
import { PrivateRoute, PublicRoute } from '../routes';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../my-redux/Auth/authSlice';
import { refreshThunk } from '../my-redux/Auth/operations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const LibraryPage = lazy(() => import('../pages/LibraryPage/LibraryPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const AdminNewsPage = lazy(() => import('../pages/AdminPage/AdminNewsPage'));
const AdminBooksPage = lazy(() => import('../pages/AdminPage/AdminBooksPage'));
const AdminInboxPage = lazy(() => import('../pages/AdminPage/AdminInboxPage'));
const LoginPage = lazy(() => import('../pages/AuthPage/LoginPage'));
const ForgotPasswordPage = lazy(() =>
  import('../pages/AuthPage/ForgotPasswordPage')
);
const ResetPasswordPage = lazy(() =>
  import('../pages/AuthPage/ResetPasswordPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const adminLink = isLoggedIn ? '/admin/news' : '/auth/login';
  const authLink = isLoggedIn ? '/auth/login' : '/admin/news';

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="news"
          element={
            <PublicRoute>
              <NewsPage />
            </PublicRoute>
          }
        />
        <Route
          path="library"
          element={
            <PublicRoute>
              <LibraryPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PublicRoute>
              <ContactsPage />
            </PublicRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="admin" element={<Navigate to={adminLink} replace />} />
        <Route path="auth" element={<Navigate to={authLink} replace />} />

        <Route path="admin">
          <Route
            path="news"
            element={
              <PrivateRoute>
                <AdminNewsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="books"
            element={
              <PrivateRoute>
                <AdminBooksPage />
              </PrivateRoute>
            }
          />
          <Route
            path="inbox"
            element={
              <PrivateRoute>
                <AdminInboxPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="auth">
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="forgot"
            element={
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path="reset"
            element={
              <PublicRoute>
                <ResetPasswordPage />
              </PublicRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
