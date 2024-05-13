import FullPageLoader from "../../../components/ui/FullPageLoader";
import useLiked from "../../../hooks/useLiked";
import SingleJob from "../../Jobs/JobsListing/SingleJob";
import LikedJob from "../LikedJob/LikedJob";

const LikedListing = () => {
  const { data, isLoading } = useLiked();
  if (isLoading) return <FullPageLoader />;

  return (
    <div className="p-3 space-y-2 overflow-auto">
      {data?.map((job) => (
        <LikedJob key={job.id} job={job.likedObj} />
      ))}
    </div>
  );
};

export default LikedListing;
