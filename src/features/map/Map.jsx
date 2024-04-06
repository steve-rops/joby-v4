import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapInit from "./MapInit";
import Markers from "./Markers";
import useJobs from "../../hooks/useJobs";
import { useSelector } from "react-redux";

const Map = () => {
  const { data: jobs } = useJobs();
  const { headerHeight } = useSelector((store) => store.ui);

  if (headerHeight)
    return (
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={true}
        className={`h-[calc(100svh-230px)] z-10 w-full`}
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
