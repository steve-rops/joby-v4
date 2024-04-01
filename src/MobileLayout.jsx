import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";

const MobileLayout = () => {
  return (
    <div className="h-screen">
      <Header />

      <Outlet />
    </div>
  );
};

export default MobileLayout;
