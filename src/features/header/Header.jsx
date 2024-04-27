import { useEffect, useRef } from "react";
import Form from "./Query/Form";
import SettingsIcon from "./SettingsIcon";
import Categories from "./categories/Categories";
import { useDispatch } from "react-redux";
import { updateHeaderHeight } from "../../components/ui/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const element = useRef();

  // useEffect(() => {
  //   const { height } = element.current.getBoundingClientRect();

  //   dispatch(updateHeaderHeight(height));
  // }, [dispatch]);

  return (
    <div
      ref={element}
      className="w-full h-fit bg-secondary sticky top-0 shadow-lg z-20"
    >
      <div className="flex justify-center pt-6 gap-2 items-center">
        <Form />
        <SettingsIcon />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
