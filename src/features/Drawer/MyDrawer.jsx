import { Drawer } from "vaul";
import { useDrawerState } from "./DrawerContext";
import JobsListing from "../Jobs/JobsListing";
import { useQuery } from "@tanstack/react-query";
import { getDefaultJobs } from "../../services/adzunaAPI";
import JobsSkeleton from "../Jobs/JobsSkeleton";

const MyDrawer = () => {
  const { isOpen, dispatch } = useDrawerState();

  // const { isLoading } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: getDefaultJobs,
  // });

  const isLoading = true;

  return (
    <Drawer.Root
      open={isOpen}
      onClose={() => {
        setTimeout(() => {
          dispatch({ type: "closeDrawer" });
        }, 200);
      }}
    >
      <Drawer.Portal>
        <Drawer.Trigger></Drawer.Trigger>
        <Drawer.Overlay className="" />
        <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[93%] rounded-t-[10px]">
          <div className="h-4 w-8 bg-foreground my-2 m-auto rounded-md" />
          <div className="  mx-2 flex flex-col overflow-auto p-4 rounded-t-[10px]">
            {isLoading ? <JobsSkeleton /> : <JobsListing />}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default MyDrawer;
