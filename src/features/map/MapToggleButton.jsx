import { CiMap } from "react-icons/ci";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const MapToggleButton = ({ display }) => {
  return (
    <Link to="map">
      <span hidden={!display}>
        <Button className="fixed bottom-10 left-[50%] translate-x-[-50%] z-10 rounded-full space-x-1  ">
          <span className="flex">
            <p className="text-xl">map</p>
            <CiMap className="text-3xl" />
          </span>
        </Button>
      </span>
    </Link>
  );
};

export default MapToggleButton;
