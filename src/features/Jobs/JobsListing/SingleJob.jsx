import { Link } from "react-router-dom";
import { formatCurrency, isNewJob } from "../../../lib/utils";
import { MdLocationOn } from "react-icons/md";
import NewLabel from "../../../components/ui/NewLabel";

const SingleJob = ({ job }) => {
  return (
    <div className="border-l-4 border-0 border-primary rounded-md pointer ">
      <Link to={`${job.id}`}>
        <div className="p-1 bg-secondary rounded-md flex items-center  ">
          <div className="w-[65%]">
            <div className="w-full flex items-center">
              <p className="text-xs text-foreground/80 w-[70%]">
                {job.company.display_name}
              </p>
              {isNewJob(job.created) && <NewLabel />}
            </div>
            <h3 className="text-lg text-pretty text-foreground font-semibold">
              {job.title}
            </h3>
            <div className="flex items-center py-2 rounded-md">
              <span className="text-foreground/70">
                <MdLocationOn />
              </span>
              <p className="text-xs text-foreground/70">
                {job.location.display_name}
              </p>
            </div>
          </div>

          <section className="w-[35%] gap-2 flex items-center ">
            <div className="w-fit border border-primary rounded-md  ">
              <h4 className="text-center h-fit bg-primary/15 rounded-b-md text-xs">
                wage
              </h4>

              {(job.salary_max && (
                <>
                  <div className="flex flex-col items-center ">
                    <span className="text-xs text-primary/75"> up to</span>
                  </div>
                  <h3 className="text-sm px-1">
                    {formatCurrency(job.salary_max)}
                    <span className="text-xs"> /yr</span>
                  </h3>
                </>
              )) || <h3 className="text-sm px-1">contact employer</h3>}
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
};

export default SingleJob;
