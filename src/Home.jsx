import { Navigate } from "react-router-dom";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="h-svh w-full grid place-items-center">
      <header className="header">
        <div>
          <div>
            <p>Clerk + React + React Router App</p>
          </div>
          <SignedIn>
            <Navigate to="app" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </header>
    </div>
  );
};

export default Home;
