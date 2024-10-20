import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://erzqvrkgixybpyrojrcd.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const createLike = async (userID, selected) => {
  const { error } = await supabase
    .from("likes")
    .insert({ clerkUserId: userID, jobId: selected.id, likedObj: selected });

  if (error) throw new Error(error.message);

  return error;
};

export const checkLikedForCurrentUser = async (userId) => {
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("clerkUserId", userId);

  if (error) throw new Error(error.message);

  return data;
};

export const deleteLike = async (jobId) => {
  const { error } = await supabase.from("likes").delete().eq("jobId", jobId);

  if (error) throw new Error(error.message);

  return error;
};
