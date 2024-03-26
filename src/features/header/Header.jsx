import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { IoOptionsOutline } from "react-icons/io5";

const Header = () => {
  const [value, setValue] = useState("");
  const { register, handleSubmit } = useForm();
  const submitting = (e) => {
    console.log(e);
  };
  return (
    <div className=" h-[15%] w-full bg-secondary z-10 flex items-center justify-center">
      <form onSubmit={handleSubmit(submitting)}>
        <input
          className="m-2 rounded-lg shadow-md outline-none p-2 text-sm"
          type="text"
          defaultValue={value}
          placeholder="search your dream job"
          onChange={(e) => setValue(e.target.value)}
          {...register("query")}
        />
      </form>
      <span className="text-l p-2 rounded-full border border-foreground ">
        <IoOptionsOutline />
      </span>
    </div>
  );
};

export default Header;
