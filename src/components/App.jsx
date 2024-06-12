import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

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
  const isLoggedIn = false;
  const link = isLoggedIn ? '/admin/news' : '/auth/login';

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="contacts" element={<ContactsPage />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="admin" element={<Navigate to={link} replace />} />

        <Route path="admin">
          <Route path="news" element={<AdminNewsPage />} />
          <Route path="books" element={<AdminBooksPage />} />
          <Route path="inbox" element={<AdminInboxPage />} />
        </Route>

        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="fogot" element={<ForgotPage />} />
          <Route path="reset" element={<ResetPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
