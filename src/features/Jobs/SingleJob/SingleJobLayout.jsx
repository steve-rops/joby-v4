import { useParams } from "react-router-dom";
import Map from "../../map/Map";
import DetailedInfo from "./DetailedInfo";
import useJobs from "../../../hooks/useJobs";

const SingleJobLayout = () => {
  const { id } = useParams();
  const { data: jobs } = useJobs();
  const selected = jobs?.find((job) => job.id === id);

  return (
    <div className="h-svh">
      <section className="h-[25%]">
        <Map selected={selected} />
      </section>

      <DetailedInfo selected={selected} />
    </div>
  );
};

export default SingleJobLayout;
