import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { updateQuery } from "./QuerySlice";

const Form = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((debvalue) => {
    dispatch(updateQuery(debvalue));
  }, 800);

  return (
    <form>
      <input
        className="rounded-lg shadow-lg outline-none p-2 text-lg"
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
