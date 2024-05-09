import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
