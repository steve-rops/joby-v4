import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import { useState } from "react";

const MobileLayout = ({ setHeaderHeight, headerHeight }) => {
  return (
    <div className="h-svh">
      <Header setHeaderHeight={setHeaderHeight} headerHeight={headerHeight} />

      <Outlet />
    </div>
  );
};

export default MobileLayout;
