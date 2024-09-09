import { Typography, Container } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContextv2";

export const UserDashboard = () => {
  const { user } = useAuth();

  console.log({ user });

  return (
    <Container>
      <Typography variant="h1">User Dashboard</Typography>
    </Container>
  );
};
