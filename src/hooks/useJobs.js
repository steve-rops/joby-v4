import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getDefaultJobs } from "../services/adzunaAPI";

const useJobs = () => {
  const { query } = useSelector((store) => store.query);
  const { country } = useSelector((store) => store.settings);

  console.log(country);
  const { data, isLoading } = useQuery({
    queryKey: ["jobs", query, country],
    queryFn: () => getDefaultJobs(query, country),
  });

  return { data, isLoading, query, country };
};

export default useJobs;
