import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Header,
  Footer,
  Loader,
  Navbar,
  ScrollUpBtn,
  AdminHeader,
  Sidebar,
} from '../../components';

export const Layout = () => {
  const location = useLocation();

  if (location.pathname.includes('/auth/')) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    );
  }

  if (location.pathname.includes('/admin/')) {
    return (
      <>
        <AdminHeader />
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </>
    );
  }

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
