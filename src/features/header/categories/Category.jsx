import { useDispatch } from "react-redux";
import { updateQuery } from "../Query/QuerySlice";
import { updateActiveID } from "./categorySlice";

const Category = ({ cat, activeID, query }) => {
  const dispatch = useDispatch();
  const isActive = activeID === cat.id || query === cat.label.toLowerCase();

  return (
    <div
      onClick={() => {
        dispatch(updateQuery(cat.label.toLowerCase()));
        dispatch(updateActiveID(cat.id));
      }}
      className={`flex cursor-pointer flex-col items-center transition-all ${
        isActive ? "border-b-[1.5px] border-primary" : ""
      }  `}
      key={cat.label}
    >
      <span
        className={`text-3xl ${isActive ? "text-primary" : "text-primary/60"}`}
      >
        {cat.logo}
      </span>
      <h4
        className={`text-balance text-md  text-center ${
          isActive ? "text-slate-900" : "text-slate-600"
        }`}
      >
        {cat.label}
      </h4>
    </div>
  );
};

export default Category;
