import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import { useState } from "react";

const MobileLayout = ({ setHeaderHeight, headerHeight }) => {
  return (
    <div className="h-svh overflow-hidden">
      <Header />

      <Outlet />
    </div>
  );
};

export default MobileLayout;
