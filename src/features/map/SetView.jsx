import { useMap } from "react-leaflet";

const SetView = ({ lat, lng }) => {
  const map = useMap();

  map.setView([lat, lng], 13);

  return null;
};

export default SetView;
