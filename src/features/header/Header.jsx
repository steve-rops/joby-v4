import { useEffect, useRef } from "react";
import Form from "./Query/Form";
import SettingsIcon from "./SettingsIcon";
import Categories from "./categories/Categories";

const Header = ({ setHeaderHeight, headerHeight }) => {
  const element = useRef();

  useEffect(() => {
    if (headerHeight) return;
    const { height } = element.current.getBoundingClientRect();

    setHeaderHeight(height);
  }, [setHeaderHeight, headerHeight]);

  return (
    <div
      ref={element}
      className="w-full h-fit bg-secondary z-10 sticky top-0 shadow-lg "
    >
      <div className="flex items-center justify-center px-1 pt-4 gap-2">
        <Form />
        <SettingsIcon />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
