import { useQuery } from "@tanstack/react-query";
import { checkLikedForCurrentUser } from "../services/supabaseAPI";
import { useUser } from "@clerk/clerk-react";

const useLiked = (selectedId = null) => {
  let isLiked = false;
  const { user } = useUser();
  const { data, isFetching: isLoading } = useQuery({
    queryKey: ["liked", selectedId],
    queryFn: () => checkLikedForCurrentUser(user.id),
    enabled: !!user?.id,
    staleTime: 10,
  });

  if (!isLoading && selectedId)
    isLiked = data?.some((el) => el.jobId === selectedId);

  return { data, isLoading, isLiked };
};

export default useLiked;

//
