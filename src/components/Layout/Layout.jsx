import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
