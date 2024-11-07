import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, Layout } from '../components';

import { PrivateRoute, PublicRoute } from '../routes';
import { refreshThunk, selectIsLoggedIn, selectIsRefreshing } from '../redux';

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
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const adminLink = isLoggedIn ? '/admin/news' : '/auth/login';
  const authLink = isLoggedIn ? '/auth/login' : '/admin/news';

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

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

        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
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
