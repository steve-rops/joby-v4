const Category = ({ cat, activeID, setActiveID }) => {
  const isActive = activeID === cat.id;
  return (
    <div
      onClick={() => setActiveID(cat.id)}
      className={`flex flex-col items-center transition-all ${
        isActive ? "border-b border-primary" : ""
      }  `}
      key={cat.label}
    >
      <span
        className={`text-3xl ${isActive ? "text-primary" : "text-primary/60"}`}
      >
        {cat.logo}
      </span>
      <h4
        className={`text-balance text-xs  text-center ${
          isActive ? "text-slate-900" : "text-slate-600"
        }`}
      >
        {cat.label}
      </h4>
    </div>
  );
};

export default Category;
