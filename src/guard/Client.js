import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hook/useAuth";
import { useState } from "react";
import LoadingScreen from "../component/custom/LoadingScreen";
import Login from "../page/auth/Login";

ClientGuard.propTypes = {
  children: PropTypes.node,
};
export default function ClientGuard({ children }) {
  const { isAuthenticated, isInitialized ,user} = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to="/auth/login" />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  if(user &&  user.role.includes("Staff")){
    return <Navigate to={"/403"} />;
  }
  return <> {children} </>;
}
