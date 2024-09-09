import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextv2";
import { CircularProgress, Box } from "@mui/material";

export const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
