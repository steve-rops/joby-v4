import { useParams } from "react-router-dom";
import Map from "../../map/Map";
import useJobs from "../../../hooks/useJobs";
import DetailedInfo from "../selectedJob/DetailedInfo";

const SingleJobLayout = () => {
  const { id } = useParams();
  const { data: jobs } = useJobs();
  const selected = jobs?.find((job) => job.id === id) || null;

  //add a guard to prevent if a job is not found / there is no selected job

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
