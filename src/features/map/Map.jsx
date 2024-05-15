import { MapContainer, TileLayer } from "react-leaflet";
import MapInit from "./MapInit";
import Markers from "./Markers";
import SetView from "./SetView";
import { useParams } from "react-router-dom";
import useJobs from "../../hooks/useJobs";

const Map = () => {
  const { id } = useParams();
  const { data: jobs } = useJobs();
  const selected = jobs?.find((job) => job.id === id) || null;

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={true}
      className={`h-[100%] z-10 w-full`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!selected && <MapInit />}

      <Markers />

      {selected && (
        <SetView lat={selected?.latitude} lng={selected?.longitude} />
      )}
    </MapContainer>
  );
};

export default Map;
