import { UserButton } from "@clerk/clerk-react";

const Footer = ({ display }) => {
  return (
    <div
      hidden={!display}
      className="fixed bottom-0 w-full bg-secondary shadow-inner border-t border-gray-500 rounded-t-xl"
    >
      <div className=" flex items-center justify-center p-3 gap-3">
        <div className="">test</div>
        <span className="">
          <UserButton />
        </span>
      </div>
    </div>
  );
};

export default Footer;
