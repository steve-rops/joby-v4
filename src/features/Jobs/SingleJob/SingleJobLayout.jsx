import Map from "../../map/Map";
import DetailedInfo from "../selectedJob/DetailedInfo";

const SingleJobLayout = () => {
  return (
    <div className="h-svh">
      <section className="h-[25%]">
        <Map />
      </section>

      <DetailedInfo />
    </div>
  );
};

export default SingleJobLayout;
