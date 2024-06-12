import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

import { PrivateRoute, PublicRoute } from '../routes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const LibraryPage = lazy(() => import('../pages/LibraryPage/LibraryPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const AdminNewsPage = lazy(() => import('../pages/AdminPage/AdminNewsPage'));
const AdminBooksPage = lazy(() => import('../pages/AdminPage/AdminBooksPage'));
const AdminInboxPage = lazy(() => import('../pages/AdminPage/AdminInboxPage'));
const LoginPage = lazy(() => import('../pages/AuthPage/LoginPage'));
const ForgotPage = lazy(() => import('../pages/AuthPage/ForgotPage'));
const ResetPage = lazy(() => import('../pages/AuthPage/ResetPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  const adminLink = isLoggedIn ? '/admin/news' : '/auth/login';
  const authLink = isLoggedIn ? '/auth/login' : '/admin/news';

  return (
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
            path="fogot"
            element={
              <PublicRoute>
                <ForgotPage />
              </PublicRoute>
            }
          />
          <Route
            path="reset"
            element={
              <PublicRoute>
                <ResetPage />
              </PublicRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
