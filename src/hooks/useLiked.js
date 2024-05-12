import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

import { checkLikedForCurrentUser } from "../services/supabaseAPI";

const useLiked = (selectedId = null) => {
  let isLiked = false;
  const { userId } = useAuth();
  const { data, isFetching: isLoading } = useQuery({
    queryKey: ["checkIfLiked", selectedId],
    queryFn: () => checkLikedForCurrentUser(userId),
    staleTime: 0,
  });

  if (!isLoading && selectedId)
    isLiked = data.some((el) => el.jobId === selectedId);

  return { data, isLoading, isLiked };
};

export default useLiked;

//
