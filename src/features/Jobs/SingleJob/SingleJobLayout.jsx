import { useParams } from "react-router-dom";
import Map from "../../map/Map";

const SingleJobLayout = () => {
  const { id } = useParams();

  return (
    <div className="h-svh">
      <section className="h-[35%] sticky top-0">
        <Map id={id} />
      </section>

      <main>detailed info</main>
    </div>
  );
};

export default SingleJobLayout;
