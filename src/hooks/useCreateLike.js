import { useMutation } from "@tanstack/react-query";
import { createLike } from "../services/supabaseAPI";
import { useAuth } from "@clerk/clerk-react";

const useCreateLike = () => {
  const { userId } = useAuth();
  const { data, mutate, status } = useMutation({
    mutationFn: (selected) => createLike(userId, selected),
  });
  const isLoading = status === "pending";

  return { data, mutate, isLoading };
};

export default useCreateLike;
