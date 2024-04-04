import Map from "./Map";
import MyDrawer from "../Drawer/MyDrawer";

const MapLayout = ({ headerHeight }) => {
  return (
    <>
      <Map headerHeight={headerHeight} />

      <MyDrawer />
    </>
  );
};

export default MapLayout;
