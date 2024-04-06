import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";

const MobileLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <Outlet />
    </div>
  );
};

export default MobileLayout;
