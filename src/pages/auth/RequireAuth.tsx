import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../../services/auth";

type Props = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const token = getToken();
  if (!token) {
    return <Navigate to="/ChefLogin" replace state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default RequireAuth;

