import { Drawer } from "vaul";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../features/settings/settingsSlice";
import { useState } from "react";

const DrawerComp = ({ isOpen = false, setIsOpen }) => {
  const [value, setValue] = useState("gb");
  const dispatch = useDispatch();
  const { country: selectedCountry } = useSelector((state) => state.settings);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    dispatch(updateSettings(e.target.country.value));
  };

  return (
    <Drawer.Root open={isOpen} onClose={() => setIsOpen(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 h-[95%] z-30">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />

            <Drawer.Title className="font-medium">
              <p className="text-3xl text-primary mb-2">Settings</p>
            </Drawer.Title>
            <form className="space-x-2 text-xl" onSubmit={handleSubmit}>
              <label htmlFor="country">Country:</label>
              <select
                name="country"
                id="country"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option value="gb">Great Britain</option>
                <option value="es">Spain</option>
                <option value="us">United States</option>
              </select>
              <div className="space-x-2 w-full mt-3 flex justify-end ">
                <Button type="submit" className="text-xl">
                  save
                </Button>
                <Button type="clear" variant="outline" className="text-xl">
                  clear
                </Button>
              </div>
            </form>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerComp;
