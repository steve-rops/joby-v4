import { useQuery } from "@tanstack/react-query";
import { getDefaultJobs } from "../../services/adzunaAPI";
import SingleJob from "./SingleJob";

const JobsListing = () => {
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: getDefaultJobs,
  });

  console.log(isLoading, jobs);
  return (
    <>
      {jobs?.map((job) => (
        <SingleJob job={job} key={job.id} />
      ))}
    </>
  );
};

export default JobsListing;
