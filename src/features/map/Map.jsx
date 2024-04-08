import { MapContainer, TileLayer } from "react-leaflet";
import MapInit from "./MapInit";
import Markers from "./Markers";
import useJobs from "../../hooks/useJobs";
import SetView from "./SetView";

const Map = ({ id }) => {
  const { data: jobs } = useJobs();

  const selectedJob = jobs.find((job) => job.id === id);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={true}
      className={`h-[100%] w-full`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!id && <MapInit />}

      {id && <SetView lat={selectedJob.latitude} lng={selectedJob.longitude} />}

      <Markers />
    </MapContainer>
  );
};

export default Map;
