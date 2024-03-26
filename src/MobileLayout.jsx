import MyDrawer from "./features/Drawer/MyDrawer";
import Map from "./features/map/Map";
import { Button } from "./components/ui/button";
import { useDrawerState } from "./features/Drawer/DrawerContext";
import Header from "./features/header/Header";

const MobileLayout = () => {
  const { isOpen: drawerIsOpen, dispatch } = useDrawerState();

  return (
    <>
      <div className="h-svh relative w-full">
        <Header />

        {/* {!drawerIsOpen && (
          <Button
            onClick={() => dispatch({ type: "toggleDrawer" })}
            className="absolute z-10 bottom-4 left-[50%] translate-x-[-50%]"
          >
            click
          </Button>
        )}

        <Map />

        <MyDrawer /> */}
      </div>
    </>
  );
};

export default MobileLayout;
