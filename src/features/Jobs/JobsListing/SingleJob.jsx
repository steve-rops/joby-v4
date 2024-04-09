import { Link } from "react-router-dom";
import { formatCurrency, isNewJob } from "../../../lib/utils";

const SingleJob = ({ job }) => {
  console.log(job);
  return (
    <div className="border-l-4 border-0 border-primary rounded-md pointer ">
      <Link to={`${job.id}`}>
        <div className="p-1 bg-secondary rounded-md flex items-center  ">
          <div className="w-[50%]">
            <div className="w-full flex items-center">
              <p className="text-xs text-foreground/80 w-[70%]">
                {job.company.display_name}
              </p>
              {isNewJob(job.created) && (
                <span className="px-2 text-center bg-yellow-300 rounded-lg text-yellow-800">
                  new
                </span>
              )}
            </div>
            <h3 className="text-md text-pretty text-foreground font-semibold">
              {job.title}
            </h3>
          </div>

          <section className="w-[50%] flex justify-end">
            <div className="h-fit w-fit border border-primary rounded-md ">
              <h4 className="text-center h-fit bg-primary/15 rounded-b-md text-xs">
                wage
              </h4>
              <div className="flex flex-col items-center">
                <span className="text-xs text-primary/75"> up to</span>
              </div>
              <h3 className="text-sm px-1">
                {formatCurrency(job.salary_max)}
                <span className="text-xs"> /yr</span>
              </h3>
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
};

export default SingleJob;
