import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, Alert, Stack } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Logo from "../../assets/ss-logo.svg";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_EMAIL } from "../ComingSoon/graphql/addEmail";

export default function ComingSoon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createEmail, { loading }] = useMutation(CREATE_EMAIL);

  const fadeInFirst = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const fadeInSecond = keyframes`
    0%, 50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    } 
  `;

  const LogoAnimationDiv = styled("div")({
    animation: `${fadeInFirst} 1.5s ease-in`,
  });

  const InputAnimationDiv = styled("div")({
    animation: `${fadeInSecond} 2s ease-in-out`,
  });

  const handleSignUp = async () => {
    try {
      await createEmail({
        variables: {
          data: {
            email,
            firstName,
            lastName,
          },
        },
      });
      console.log({ email, firstName, lastName });
      navigate("/confirmationPage");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Box
      bgcolor="black"
      minHeight="100vh"
      height="auto"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: { xs: 0, sm: 0 }, margin: "auto" }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        maxWidth="25rem"
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <LogoAnimationDiv>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "25rem",
                objectFit: "contain",
              }}
            />
          </LogoAnimationDiv>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              border: "2px solid white",
              borderRadius: "8px",
              p: 1,
            }}
          >
            Our mission is to create a platform that will cultivate a community of sneakerheads by giving them the power to market their brand and manage their business.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            sx={{ fontSize: { xs: "1.4rem", sm: "1.7rem" } }}
          >
            Join the waitlist below
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Stack spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
              <TextField
                label="Enter your first name"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ width: { xs: "90%", sm: "20rem" }, mb: 1 }}
              />
              <TextField
                label="Enter your last name"
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{ width: { xs: "90%", sm: "20rem" }, mb: 1 }}
              />
              <TextField
                label="Enter your email address"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: { xs: "90%", sm: "20rem" }, mb: 1 }}
              />
            <Button
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "50%", sm: "100%" },
                maxWidth: 400,
                mb: 1,
              }}
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="white" textAlign="center" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            Already have an account?
            <Button
              variant="text"
              sx={{
                color: "#FFD700",
                marginLeft: "0.5rem",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          </Typography>
        </Grid>
      </Grid>
      {errorMessage && (
        <Alert severity="error" color="error" sx={{ maxWidth: "80%", marginTop: "1rem", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
}