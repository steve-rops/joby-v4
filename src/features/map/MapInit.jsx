import { useMap } from "react-leaflet";
import useJobs from "../../hooks/useJobs";

const MapInit = () => {
  const { data: jobs } = useJobs();
  const map = useMap();

  if (!jobs) return;

  const bounds = jobs?.map((job) => [job.latitude, job.longitude]);

  map.fitBounds(bounds, { padding: [80, 80], animate: true });

  return null;
};

export default MapInit;
