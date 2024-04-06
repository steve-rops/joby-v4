import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { updateQuery } from "./QuerySlice";
import { updateActiveID } from "../categories/categorySlice";

const Form = () => {
  const { query } = useSelector((store) => store.query);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (query) setValue(query);
  }, [query]);

  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((debvalue) => {
    dispatch(updateQuery(debvalue));
    dispatch(updateActiveID(null));
  }, 800);

  return (
    <form className="w-[85%]" onSubmit={(e) => e.preventDefault()}>
      <input
        className="rounded-lg shadow-lg outline-none p-2 text-lg w-full"
        type="text"
        value={value}
        placeholder="search your dream job"
        onChange={(e) => {
          setValue(e.target.value);
          debounced(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
