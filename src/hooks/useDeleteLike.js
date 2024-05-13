import { useMutation } from "@tanstack/react-query";
import { deleteLike } from "../services/supabaseAPI";

const useDeleteLike = (jobId) => {
  const { mutate, error } = useMutation({
    mutationFn: () => deleteLike(jobId),
  });
  return { mutate, error };
};
export default useDeleteLike;
