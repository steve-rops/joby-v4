import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapInit from "./MapInit";
import Markers from "./Markers";
import useJobs from "../../hooks/useJobs";
import Loader from "../../components/ui/Loader";

const Map = ({ headerHeight }) => {
  const { data: jobs } = useJobs();

  if (!headerHeight) return <Loader />;

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={true}
      className={`h-[calc(100%-${headerHeight}px)] z-10 w-full`}
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
