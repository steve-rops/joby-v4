import { useQuery } from "@tanstack/react-query";
import { getDefaultJobs } from "../../services/adzunaAPI";
import SingleJob from "./SingleJob";

const JobsListing = () => {
  const { data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: getDefaultJobs,
  });

  return (
    <>
      {jobs?.map((job) => (
        <SingleJob job={job} key={job.id} />
      ))}
    </>
  );
};

export default JobsListing;
