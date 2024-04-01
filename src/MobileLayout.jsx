import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";

const MobileLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default MobileLayout;
