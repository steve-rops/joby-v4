import { Skeleton } from "../../components/ui/skeleton";
import { resultsPerPage } from "../../services/adzunaAPI";

const JobsSkeleton = () => {
  const numberOfJobsPerPage = Array.from(
    { length: resultsPerPage },
    (v, i) => i
  );
  return (
    <>
      {numberOfJobsPerPage.map((el) => (
        <div key={el}>
          <Skeleton className="p-2 mb-2">
            <Skeleton className="h-4 w-24 my-1 " />
            <Skeleton className="h-3 w-6" />
          </Skeleton>
        </div>
      ))}
    </>
  );
};

export default JobsSkeleton;
