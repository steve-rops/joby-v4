import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <div className="h-svh w-full grid place-items-center">
      <Link to="app">
        <Button>app</Button>
      </Link>
    </div>
  );
};

export default Home;
