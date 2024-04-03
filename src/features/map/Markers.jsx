import { Marker } from "react-leaflet";
import useJobs from "../../hooks/useJobs";

const Markers = () => {
  const { data: jobs } = useJobs();

  return (
    <>
      {jobs?.map((job) => (
        <Marker key={job.id} position={[job.latitude, job.longitude]} />
      ))}
    </>
  );
};

export default Markers;
