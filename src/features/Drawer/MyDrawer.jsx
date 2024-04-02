import { Drawer } from "vaul";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/ui/Loader";
import { useState } from "react";
import { getDefaultJobs } from "../../services/adzunaAPI";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MyDrawer = () => {
  const [snap, setSnap] = useState(0.33);
  const { query } = useSelector((store) => store.query);

  const { data, isLoading } = useQuery({
    queryKey: ["jobs", query],
    queryFn: () => getDefaultJobs(query),
  });

  console.log(snap);

  if (snap === 1) return <Navigate to={"/app"} />;

  return (
    <Drawer.Root
      open
      modal={false}
      snapPoints={[0.33, 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <Drawer.Overlay className="" />
      <Drawer.Content
        className={`bg-white flex flex-col fixed bottom-0 left-0 z-30 right-0 h-[75%] rounded-t-[10px] outline-none`}
      >
        <div className="h-2 w-12 bg-primary/75 rounded-md mx-auto mt-2" />
        <div className="max-w-md w-full mx-auto flex flex-col text-center text-xl">
          {isLoading ? <Loader /> : `${data.length} jobs were found`}
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};
export default MyDrawer;
