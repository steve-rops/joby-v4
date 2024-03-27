import { useQuery } from "@tanstack/react-query";
import { getDefaultJobs } from "../../services/adzunaAPI";
import SingleJob from "./SingleJob";
import JobsSkeleton from "./JobsSkeleton";
import { useSelector } from "react-redux";

const JobsListing = () => {
  const { query } = useSelector((store) => store.query);

  console.log(query);

  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs", query],
    queryFn: () => getDefaultJobs(query),
    staleTime: 1000,
  });

  return (
    <div className=" p-2 space-y-2">
      {isLoading ? (
        <JobsSkeleton />
      ) : (
        jobs.map((job) => <SingleJob job={job} key={job.id} />)
      )}
    </div>
  );
};

export default JobsListing;
