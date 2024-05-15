import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const LikedJob = ({ job }) => {
  return (
    <div className="border-l-4 border-0 border-primary rounded-md pointer ">
      <Link to={`/app/${job.id}`}>
        <div className=" w-full p-1 bg-secondary rounded-md flex  flex-col">
          <p className="text-xs text-foreground/80 w-[70%]">
            {job.company.display_name}
          </p>
          <h1>{job.title}</h1>
          <div className="flex items-center rounded-md">
            <span className="text-foreground/70">
              <MdLocationOn />
            </span>
            <p className="text-xs text-foreground/70">
              {job.location.display_name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LikedJob;
