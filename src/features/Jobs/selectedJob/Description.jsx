const Description = ({ desc, url }) => {
  return (
    <div>
      <h4 className="text-lg font-bold">Description:</h4>
      <p className="text-sm">
        {desc}{" "}
        <a
          href={url}
          target="_blank"
          className="text-primary cursor-pointer hover:text-primary/80"
        >
          [learn more]
        </a>
      </p>
    </div>
  );
};

export default Description;
