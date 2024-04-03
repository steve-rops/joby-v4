import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getDefaultJobs } from "../services/adzunaAPI";

const useJobs = () => {
  const { query } = useSelector((store) => store.query);
  const { data, isLoading } = useQuery({
    queryKey: ["jobs", query],
    queryFn: () => getDefaultJobs(query),
  });

  return { data, isLoading, query };
};

export default useJobs;
