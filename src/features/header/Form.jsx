import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [value, setValue] = useState("");
  const { register, handleSubmit } = useForm();
  const submitting = (e) => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(submitting)}>
      <input
        className="rounded-lg shadow-lg outline-none p-2 text-lg"
        type="text"
        defaultValue={value}
        placeholder="search your dream job"
        onChange={(e) => setValue(e.target.value)}
        {...register("query")}
      />
    </form>
  );
};

export default Form;
