import MyDrawer from "./features/Drawer/MyDrawer";
import Map from "./features/map/Map";
import { Button } from "./components/ui/button";
import { useDrawerState } from "./features/Drawer/DrawerContext";

const MobileLayout = () => {
  const { isOpen: isDrawerOpen, dispatch } = useDrawerState();

  return (
    <>
      <div className="h-lvh relative w-full transition-all ">
        <div className=" h-[10%] w-full bg-secondary absolute z-10 text-xl">
          test
        </div>

        {!isDrawerOpen && (
          <Button
            onClick={() => dispatch({ type: "toggleDrawer" })}
            className="absolute z-10 bottom-2 left-[50%] translate-x-[-50%]"
          >
            click
          </Button>
        )}

        <Map />
        <MyDrawer />
      </div>
    </>
  );
};

export default MobileLayout;
