import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { updateQuery } from "./QuerySlice";
import { updateActiveID } from "../categories/categorySlice";

const Form = () => {
  const { query } = useSelector((store) => store.query);
  const [value, setValue] = useState("");
  const element = useRef();

  useEffect(() => {
    if (query) setValue(query);
  }, [query]);

  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((debvalue) => {
    dispatch(updateQuery(debvalue));
    dispatch(updateActiveID(null));
    element.current.focus();
  }, 800);

  return (
    <section ref={element} className="w-[83%]">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="rounded-lg shadow-lg  p-3 text-lg w-full"
          type="text"
          value={value}
          placeholder="search your dream job"
          onChange={(e) => {
            setValue(e.target.value);
            debounced(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Form;
