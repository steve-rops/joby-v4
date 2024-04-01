import { useEffect, useRef } from "react";
import Form from "./Query/Form";
import SettingsIcon from "./SettingsIcon";
import Categories from "./categories/Categories";
import { useDispatch } from "react-redux";
import { updateHeight } from "../../uiSlice";

const Header = () => {
  const topBarHeight = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (topBarHeight.current) {
      const { height } = topBarHeight.current.getBoundingClientRect();

      dispatch(updateHeight(height));
    }
  }, [dispatch]);

  return (
    <div className="w-full h-[25%] bg-secondary z-10 sticky top-0 shadow-lg ">
      <div className="flex items-center justify-center px-1 pt-4 gap-2">
        <Form />
        <SettingsIcon />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
