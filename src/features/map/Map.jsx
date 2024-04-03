import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapInit from "./MapInit";
import Markers from "./Markers";
import useJobs from "../../hooks/useJobs";

const Map = () => {
  const { data: jobs } = useJobs();

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={true}
      className={`h-[75%] z-10 fixed bottom-0 w-full`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapInit />
      <Markers />
    </MapContainer>
  );
};

export default Map;
