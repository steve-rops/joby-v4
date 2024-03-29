import { useQuery } from "@tanstack/react-query";
import { getDefaultJobs } from "../../services/adzunaAPI";
import SingleJob from "./SingleJob";
import JobsSkeleton from "./JobsSkeleton";
import { useSelector } from "react-redux";

const JobsListing = () => {
  const { query } = useSelector((store) => store.query);

  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs", query],
    queryFn: () => getDefaultJobs(query),
    staleTime: 1000,
  });

  return (
    <div className=" p-3 h-fit">
      {isLoading ? (
        <JobsSkeleton />
      ) : (
        <div className="h-fit pb-12 space-y-2">
          <div className="text-center font-mono py-1 bg-primary/10 rounded-lg">
            {jobs.length} jobs were found
          </div>
          {jobs.map((job) => (
            <SingleJob job={job} key={job.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsListing;
