import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import HamburgerMenu from "../features/hamburger/HamburgerMenu";
import { Button } from "../components/ui/button";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-svh w-full flex flex-col">
      <header className="p-4 flex items-center justify-between shadow-md">
        <h1 className="text-5xl">
          Joby <span className="text-xs text-primary ">v4</span>
        </h1>

        <nav className="space-x-2">
          <HamburgerMenu />
        </nav>
      </header>

      <section className="p-10 flex-1 justify-center flex flex-col items-center gap-4 ">
        <h1 className="text-4xl">Find your dream Job.</h1>

        <div className="flex flex-col items-center gap-2">
          <SignedOut>
            <section>
              <Button className="">
                <Link to="sign-in">Sign in</Link>
              </Button>
              <span> or </span>
              <Button variant="outline">
                <Link to="sign-up">Sign up</Link>
              </Button>
              <span> to continue</span>
            </section>
          </SignedOut>

          <SignedIn>
            <Navigate to="/app" replace />
          </SignedIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
