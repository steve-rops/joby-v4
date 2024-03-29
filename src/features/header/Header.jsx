import Form from "./Query/Form";
import SettingsIcon from "./SettingsIcon";
import Categories from "./categories/Categories";

const Header = () => {
  return (
    <div className="w-full bg-secondary z-10 shadow-lg ">
      <div className="flex items-center justify-center px-1 pt-4 gap-2">
        <Form />
        <SettingsIcon />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
