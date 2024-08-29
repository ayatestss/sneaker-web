import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextv2";

export const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <p className="loading">
        <span>Checking credentials, wait a moment...</span>
      </p>
    );

  if (!user) {
    console.log("Rerouting");
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
