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
      <div className="grid w-screen h-screen grid-cols-[240px_1fr] grid-rows-[84px_1fr] grid-areas-layout">
        <AdminHeader className="grid-in-head" />
        <aside className="grid-in-aside bg-[#FFD43766] p-6">
          <Sidebar />
        </aside>
        <main className="grid-in-main overflow-y-auto px-4">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    );
  }

  if (location.pathname == '/404') {
    return (
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
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
