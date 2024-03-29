const id = "2ad566a2";
const key = "132b3e026fae2b912b6b4c83415c5c4a";
export const resultsPerPage = 15;
// const url =
//   "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}&results_per_page=20";

export const getDefaultJobs = async (query = "") => {
  const res = await fetch(
    `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${id}&app_key=${key}&results_per_page=${resultsPerPage}&what=${query}`
  );
  if (!res.ok) throw new Error(res);

  const { results } = await res.json();

  const jobsWithCoords = results.filter((job) => job.latitude);

  return jobsWithCoords;
};
