const SingleJob = ({ job }) => {
  return (
    <div className="border-l-4 border-0 border-primary rounded-md">
      <div className="p-1 bg-secondary rounded-md">
        <div className="w-[50%]">
          <p className="text-xs text-foreground/80">
            {job.company.display_name}
          </p>
          <h3 className="text-md text-pretty text-foreground font-semibold">
            {job.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
