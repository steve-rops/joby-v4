import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLike } from "../services/supabaseAPI";
import { useToast } from "../components/ui/use-toast";

const useDeleteLike = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate, error, status } = useMutation({
    mutationFn: (jobId) => deleteLike(jobId),
    onSuccess: () => {
      toast({
        description: "you have succesfully unliked the job post",
        status: "success",
      });

      queryClient.invalidateQueries("likes");
    },
  });

  const isLoading = status === "pending";
  return { mutate, error, isLoading };
};
export default useDeleteLike;
