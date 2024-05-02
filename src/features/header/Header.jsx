import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import Form from "./Query/Form";
import Categories from "./categories/Categories";
import { Button } from "../../components/ui/button";
import { IoOptionsOutline } from "react-icons/io5";

const Header = ({ setDrawerIsOpen }) => {
  return (
    <div className="w-full h-fit bg-secondary sticky top-0 shadow-lg z-20">
      <div className="flex justify-center pt-2 gap-2 items-center">
        <Form />

        <span
          className="text-4xl h-fit p-1 rounded-full border border-foreground cursor-pointer"
          onClick={() => setDrawerIsOpen((open) => !open)}
        >
          <IoOptionsOutline />
        </span>
      </div>
      <Categories />
    </div>
  );
};

export default Header;
