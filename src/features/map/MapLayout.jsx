import Map from "./Map";
import MyDrawer from "../Drawer/MyDrawer";
import useJobs from "../../hooks/useJobs";

const MapLayout = () => {
  const { data: jobs } = useJobs();
  return (
    <>
      <div className="h-[calc(100svh-230px)] z-10 w-full">
        <Map jobs={jobs} />
      </div>
      <MyDrawer />
    </>
  );
};

export default MapLayout;
