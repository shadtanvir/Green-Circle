import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRoute;
