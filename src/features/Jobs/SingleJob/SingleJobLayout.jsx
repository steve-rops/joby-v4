import { useParams } from "react-router-dom";
import Map from "../../map/Map";
import DetailedInfo from "./DetailedInfo";
import useJobs from "../../../hooks/useJobs";

const SingleJobLayout = () => {
  const { id } = useParams();
  const { data: jobs } = useJobs();

  return (
    <div className="h-svh">
      <section className="h-[25%]">
        <Map id={id} jobs={jobs} />
      </section>

      <DetailedInfo />
    </div>
  );
};

export default SingleJobLayout;
