// import MyDrawer from "./features/Drawer/MyDrawer";
// import Map from "./features/map/Map";
import { Button } from "./components/ui/button";
// import { useDrawerState } from "./features/Drawer/DrawerContext";
import Header from "./features/header/Header";
import JobsListing from "./features/Jobs/JobsListing";

const MobileLayout = () => {
  // const { isOpen: drawerIsOpen, dispatch } = useDrawerState();

  return (
    <>
      <div className="h-full relative w-full">
        <Header />

        <JobsListing />

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
        <div className="h-screen w-full absolute top-0">
          <Button
            size="sm"
            className="fixed top-[90%] left-[50%] translate-x-[-50%] z-10"
          >
            show map
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileLayout;
