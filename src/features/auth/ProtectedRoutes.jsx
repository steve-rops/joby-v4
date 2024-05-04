import { useUser } from "@clerk/clerk-react";
import FullPageLoader from "../../components/ui/FullPageLoader";
import MobileLayout from "../../MobileLayout";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <FullPageLoader />;
  }

  if (!isSignedIn) {
    navigate("/sign-in");
  }

  return <MobileLayout />;
};
export default ProtectedRoutes;
