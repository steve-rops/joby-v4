import { CiMap } from "react-icons/ci";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const MapToggleButton = () => {
  return (
    <Link to="map">
      <Button className="fixed bottom-4 left-[50%] translate-x-[-50%] z-10 rounded-full space-x-1  ">
        <p>map</p>
        <CiMap className="text-lg" />
      </Button>
    </Link>
  );
};

export default MapToggleButton;
