import { SignUp } from "@clerk/clerk-react";

const SignUpComponent = () => {
  return (
    <div className="h-svh w-full grid place-items-center bg-primary/35">
      <SignUp forceRedirectUrl="/app" />
    </div>
  );
};

export default SignUpComponent;
