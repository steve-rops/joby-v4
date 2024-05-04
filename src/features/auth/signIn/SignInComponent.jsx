import { SignIn } from "@clerk/clerk-react";

const SignInComponent = () => {
  return (
    <div className="h-svh w-full grid place-items-center bg-primary/35">
      <SignIn forceRedirectUrl={"/app"} fallbackRedirectUrl="/" />
    </div>
  );
};

export default SignInComponent;
