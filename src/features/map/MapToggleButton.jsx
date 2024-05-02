import { CiMap } from "react-icons/ci";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const MapToggleButton = ({ display }) => {
  return (
    <Link to="map">
      <span hidden={!display}>
        <Button className="fixed bottom-4 left-[50%] translate-x-[-50%] z-10 rounded-full space-x-1 text-lg  ">
          <span className="flex items-center">
            <p>map</p>
            <CiMap className="text-2xl" />
          </span>
        </Button>
      </span>
    </Link>
  );
};

export default MapToggleButton;
