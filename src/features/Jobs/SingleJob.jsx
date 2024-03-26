const SingleJob = ({ job }) => {
  return (
    <div className="border-l-4 border-0 border-primary rounded-md">
      <div className="p-1 bg-secondary rounded-md">
        <h3 className="text-md w-[50%] text-pretty">{job.title}</h3>
      </div>
    </div>
  );
};

export default SingleJob;
