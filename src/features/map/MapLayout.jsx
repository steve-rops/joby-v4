import Map from "./Map";
import MyDrawer from "../Drawer/MyDrawer";

const MapLayout = () => {
  return (
    <>
      <div className="h-[calc(100svh-230px)] z-10 w-full">
        <Map />
      </div>
      <MyDrawer />
    </>
  );
};

export default MapLayout;
