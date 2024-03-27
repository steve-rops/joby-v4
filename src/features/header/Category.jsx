const Category = ({ cat, activeID, setActiveID }) => {
  return (
    <div
      onClick={() => setActiveID(cat.id)}
      className={`flex flex-col items-center transition-all ${
        activeID === cat.id ? "border-b border-primary" : ""
      }  `}
      key={cat.label}
    >
      <span
        className={`text-3xl text-primary${activeID === cat.id ? "" : "/60"}`}
      >
        {cat.logo}
      </span>
      <h4 className="text-balance text-xs  text-center ">{cat.label}</h4>
    </div>
  );
};

export default Category;
