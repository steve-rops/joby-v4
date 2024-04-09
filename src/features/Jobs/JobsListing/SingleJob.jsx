import { Link } from "react-router-dom";
import { formatCurrency } from "../../../lib/utils";

const SingleJob = ({ job }) => {
  console.log(job);
  return (
    <div className="border-l-4 border-0 border-primary rounded-md pointer">
      <Link to={`${job.id}`}>
        <div className="p-1 bg-secondary rounded-md flex items-center ">
          <div className="w-[50%]">
            <p className="text-xs text-foreground/80">
              {job.company.display_name}
            </p>
            <h3 className="text-md text-pretty text-foreground font-semibold">
              {job.title}
            </h3>
          </div>

          <section className="w-[49%]">
            <div className="h-14 w-14 border border-primary rounded-md ">
              <h4 className="text-center h-fit bg-primary/15 rounded-b-md text-xs">
                wage
              </h4>
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
};

export default SingleJob;
