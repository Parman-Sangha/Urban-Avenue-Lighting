import { useAuth } from "../context/authcontext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      // Redirect to the login page
      router.push("/login");
    }
  }, [currentUser, router]);

  return currentUser ? children : null;
};

export default PrivateRoute;
