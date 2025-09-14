import "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ roles, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin" && roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorised" replace />;
  }

  return children;
};

export default ProtectedRoute;