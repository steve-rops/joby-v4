import Form from "./Query/Form";
import SettingsIcon from "./SettingsIcon";
import Categories from "./categories/Categories";

const Header = () => {
  return (
    <div className="w-full h-[25%] bg-secondary z-10 sticky top-0 shadow-lg ">
      <div className="flex justify-center pt-6 gap-2 items-center">
        <Form />
        <SettingsIcon />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
