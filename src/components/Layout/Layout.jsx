import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, Footer, Loader, Navbar, ScrollUpBtn } from '../../components';

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="container">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollUpBtn />
      </main>
      <Footer />
    </>
  );
};
