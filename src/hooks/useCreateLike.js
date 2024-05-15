import { useMutation } from "@tanstack/react-query";
import { createLike } from "../services/supabaseAPI";
import { useAuth } from "@clerk/clerk-react";
import { useToast } from "../components/ui/use-toast";

const useCreateLike = () => {
  const { userId } = useAuth();
  const { toast } = useToast();
  const { data, mutate, status } = useMutation({
    mutationFn: (selected) => createLike(userId, selected),

    onSuccess: () =>
      toast({ description: "✅ you have succesfully liked this post" }),
  });
  const isLoading = status === "pending";

  return { data, mutate, isLoading };
};

export default useCreateLike;
