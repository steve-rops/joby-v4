import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

import { checkLikedForCurrentUser } from "../services/supabaseAPI";

const useCheckIfLiked = (selectedId) => {
  let isLiked = false;
  const { userId } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["checkIfLiked", selectedId],
    queryFn: () => checkLikedForCurrentUser(userId),
  });

  if (!isLoading) isLiked = data.some((el) => el.jobId === selectedId);

  console.log(isLiked);
  return { data, isLoading, isLiked };
};

export default useCheckIfLiked;

//
