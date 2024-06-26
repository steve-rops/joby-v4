import { UserButton, useUser } from "@clerk/clerk-react";
import { FaRegHeart } from "react-icons/fa6";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Footer = ({ display }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div
      hidden={!display}
      className="fixed bottom-0 w-full bg-secondary shadow-inner border-t-[0.5px]  border-gray-300 rounded-t-xl transition-all "
    >
      <div className=" flex justify-center items-center ">
        <div className="w-[90%] flex justify-center items-center p-2 gap-12">
          <span className="flex flex-col items-center p-2 cursor-pointer hover:bg-secondary-foreground/15 hover:rounded-md">
            <PiMagnifyingGlassBold className="size-6 font-bold" />
            <p className="text-xs">Discover</p>
          </span>
          <span
            onClick={() => navigate("liked")}
            className="flex flex-col items-center p-2 cursor-pointer hover:bg-secondary-foreground/15 hover:rounded-md"
          >
            <FaRegHeart className=" size-6 " />
            <p className="text-xs">Liked</p>
          </span>
          <span className="flex flex-col items-center p-2 cursor-pointer hover:bg-secondary-foreground/15 hover:rounded-md">
            <UserButton />
            <p className="text-xs">{user.fullName}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
