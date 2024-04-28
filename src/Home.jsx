import { NavLink, Navigate } from "react-router-dom";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <div className="h-svh w-full">
      <header className="p-2 flex items-center justify-between">
        <h1 className="text-2xl">
          Joby <span className="text-xs text-primary ">v4</span>
        </h1>

        <nav className="space-x-2">
          <NavLink className="text-sm" to="/about">
            About
          </NavLink>
          <NavLink className="text-sm" to="/employers">
            Employers
          </NavLink>
          <SignedOut>
            <Button size="sm">
              <SignInButton />
            </Button>
            <Button size="sm" variant="outline">
              <SignUpButton />
            </Button>
          </SignedOut>
        </nav>
      </header>
    </div>
  );
};

export default Home;
