import { Drawer } from "vaul";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {
  SignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Button } from "../../components/ui/button";

const HamburgerMenu = () => {
  return (
    <div>
      <Drawer.Root direction="right">
        <Drawer.Trigger>
          <span>
            <GiHamburgerMenu className="text-2xl" />
          </span>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[60%] mt-24 fixed bottom-0 right-0">
            <div className="p-4 bg-white flex-1 h-full">
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                  <span className="text-primary">pages</span>
                </Drawer.Title>
              </div>

              <nav className="flex flex-col mb-2 text-xl">
                <NavLink className="" to="/about">
                  About
                </NavLink>
                <NavLink className="" to="/employers">
                  Employers
                </NavLink>
              </nav>

              <SignedOut>
                <Button className="">
                  <SignInButton />
                </Button>
                <Button variant="outline">
                  <SignUpButton />
                </Button>
              </SignedOut>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default HamburgerMenu;
