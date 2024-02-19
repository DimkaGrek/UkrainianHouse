import { Suspense } from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
