import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { IoOptionsOutline } from "react-icons/io5";
import { getJobsCategories } from "../../services/adzunaAPI";
import Categories from "./Categories";

const Header = () => {
  const [value, setValue] = useState("");
  const { register, handleSubmit } = useForm();
  const submitting = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full bg-secondary z-10 ">
      <div className="flex items-center justify-center p-1 gap-2">
        <form onSubmit={handleSubmit(submitting)}>
          <input
            className="rounded-lg shadow-md outline-none p-2 text-sm"
            type="text"
            defaultValue={value}
            placeholder="search your dream job"
            onChange={(e) => setValue(e.target.value)}
            {...register("query")}
          />
        </form>
        <span className="text-l h-fit  rounded-full border border-foreground ">
          <IoOptionsOutline />
        </span>
      </div>
      <Categories />
    </div>
  );
};

export default Header;
