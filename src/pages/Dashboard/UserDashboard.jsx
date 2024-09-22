import { Typography, Container } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContextv2";
import { NewUserModal } from "../../components/NewUserModal";

export const UserDashboard = () => {
  const { user } = useAuth();

  console.log({ user });

  return (
    <Container>
      <NewUserModal />
      <Typography variant="h1">Welcome!</Typography>
    </Container>
  );
};
