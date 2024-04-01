import JobsListing from "../features/Jobs/JobsListing";
import MapToggleButton from "../features/map/MapToggleButton";

const JobsResults = () => {
  return (
    <>
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
      {/* <div className="h-dvh w-full absolute top-0"> */}
      <MapToggleButton />
      {/* </div> */}
    </>
  );
};

export default JobsResults;
