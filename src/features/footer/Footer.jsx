import { UserButton } from "@clerk/clerk-react";
import { FaHeart } from "react-icons/fa6";

const Footer = ({ display }) => {
  return (
    <div
      hidden={!display}
      className="fixed bottom-0 w-full bg-secondary shadow-inner border-t border-gray-500 rounded-t-xl"
    >
      <div className=" flex items-center justify-center p-3 gap-3">
        <span className="flex items-center">
          <p>liked</p>
          <FaHeart className="text-red-600" />
        </span>

        <span className="">
          <UserButton />
        </span>
      </div>
    </div>
  );
};

export default Footer;
