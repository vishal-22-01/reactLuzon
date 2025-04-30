import { Outlet } from "react-router-dom";
import React from "react";
import Navbaar from "../components/navbaar";

const Layout = () => {
  return (
    <>
      <Navbaar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
