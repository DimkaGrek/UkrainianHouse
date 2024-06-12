import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const News = lazy(() => import('../pages/News/News'));

const Library = lazy(() => import('../pages/LibraryBooks/Library'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('../pages/Admin/LoginPage'));
const Admin = lazy(() => import('../pages/Admin/Admin'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/library" element={<Library />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/loginadmin" element={<LoginPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
