import JobsSkeleton from "../JobsSkeleton";
import useJobs from "../../../hooks/useJobs";
import MapToggleButton from "../../map/MapToggleButton";
import SingleJob from "./SingleJob";

const JobsListing = () => {
  const { data: jobs, isLoading } = useJobs();

  return (
    <>
      <div className="p-4">
        {isLoading ? (
          <JobsSkeleton />
        ) : (
          <div className="pb-12 space-y-2">
            <div className="text-center font-mono py-1 bg-primary/10 rounded-lg">
              {jobs?.length} jobs were found
            </div>
            {jobs?.map((job) => (
              <SingleJob job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>

      <MapToggleButton />
    </>
  );
};

export default JobsListing;
