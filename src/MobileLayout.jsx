import { Navigate, Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import { useUser } from "@clerk/clerk-react";
import DrawerComp from "./components/ui/DrawerComp";
import { useState } from "react";

const MobileLayout = () => {
  const { user } = useUser();
  const [DrawerIsOpen, setDrawerIsOpen] = useState(false);

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

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
