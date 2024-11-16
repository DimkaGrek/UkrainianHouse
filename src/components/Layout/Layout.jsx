import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";

import {
  Header,
  Footer,
  Loader,
  Navbar,
  ScrollUpBtn,
  AdminHeader,
  Sidebar,
} from "../../components";

export const Layout = () => {
  const location = useLocation();

  if (location.pathname.includes("/auth/")) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    );
  }

  if (location.pathname.includes("/admin/")) {
    return (
      <div className="grid h-screen w-screen grid-cols-[200px_1fr] grid-rows-[84px_1fr] grid-areas-layout">
        <AdminHeader className="grid-in-head" />
        <aside className="bg-[#FFD43766] p-6 grid-in-aside">
          <Sidebar />
        </aside>
        <main className="overflow-y-auto px-4 grid-in-main">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    );
  }

  if (location.pathname == "/404") {
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
