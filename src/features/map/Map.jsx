import { MapContainer, TileLayer } from "react-leaflet";
import MapInit from "./MapInit";
import Markers from "./Markers";
import useJobs from "../../hooks/useJobs";
import SetView from "./SetView";

const Map = ({ selected }) => {
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
