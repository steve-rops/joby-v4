import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import DrawerComp from "./components/ui/DrawerComp";
import { useState } from "react";

const MobileLayout = () => {
  const [DrawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <Header setDrawerIsOpen={setDrawerIsOpen} />
        <Outlet />
      </div>
      <DrawerComp isOpen={DrawerIsOpen} setIsOpen={setDrawerIsOpen} />
    </>
  );
};

export default MobileLayout;
