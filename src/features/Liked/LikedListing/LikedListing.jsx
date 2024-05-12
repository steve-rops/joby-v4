import FullPageLoader from "../../../components/ui/FullPageLoader";
import useLiked from "../../../hooks/useLiked";

const LikedListing = () => {
  const { data, isLoading } = useLiked();
  if (isLoading) return <FullPageLoader />;

  return <div className="p-3">listing here</div>;
};

export default LikedListing;
