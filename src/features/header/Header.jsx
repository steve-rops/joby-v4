import { useEffect, useRef, useState } from "react";
import Form from "./Query/Form";
import SettingsIcon from "./SettingsIcon";
import Categories from "./categories/Categories";

const Header = () => {
  const [height, setHeight] = useState();
  const topBarHeight = useRef(null);

  useEffect(() => {
    if (topBarHeight.current) {
      const { height } = topBarHeight.current.getBoundingClientRect();
      setHeight(height);
    }
  }, [setHeight]);

  if (height) console.log(height);

  return (
    <div
      ref={topBarHeight}
      className="w-full bg-secondary z-10 sticky top-0 shadow-lg "
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
