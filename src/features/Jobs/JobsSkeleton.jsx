import { Skeleton } from "../../components/ui/skeleton";
import { resultsPerPage } from "../../services/adzunaAPI";

const JobsSkeleton = () => {
  const numberOfJobsPerPage = Array.from(
    { length: resultsPerPage },
    (v, i) => i
  );
  return (
    <div className="">
      {numberOfJobsPerPage.map((el) => (
        <div key={el}>
          <Skeleton className="bg-gray-300 p-2 mb-2">
            <Skeleton className="bg-primary/45 h-4 w-24 my-1 " />
            <Skeleton className="bg-primary/40 h-3 w-16" />
          </Skeleton>
        </div>
      ))}
    </div>
  );
};

export default JobsSkeleton;
