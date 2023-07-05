import {
  Box,
  Button,
  Grid,
  InputBase,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/ss-logo.svg";
import { sendPasswordResetEmail } from "../../auth/services";
import Alert from "@mui/lab/Alert";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (await sendPasswordResetEmail(email)) {
      setSuccessMessage("Password reset email sent. Check your inbox.");
    } else {
      setError("Failed to send password reset email.");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(null);
    setSuccessMessage(null);
  };

  return (
    <Box
      bgcolor="black"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: { xs: 0, sm: 0 } }}
      
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        maxWidth="25rem"
        sx={{ width: "100%" }}
      >
      <Grid item xs={12} pb={3} style={{ textAlign: 'center' }}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: 'auto',
            width: '100%',
            maxWidth: '25rem',
            objectFit: 'contain',
          }}
        />
      </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            fontSize="1.5rem"
            border="white solid 2px"
            p={2}
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            Please enter your email address. You will receive an email with
            instructions on how to reset your password.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: "4px",
            p: 2,
            mt: 3,
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <InputBase
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              border: "solid white",
              borderRadius: "0.2rem",
              width: "100%",
              height: "5vh",
              fontSize: "2vh",
              background: "white",
              mb: 2,
            }}
          />
          <Button variant="contained" onClick={handlePasswordReset}>
            Get New Password
          </Button>
          <Snackbar
            open={error !== null || successMessage !== null}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            action={(key)         => (
          <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
            Close
          </Button>
        )}
      >
        {error ? (
          <Alert onClose={handleCloseSnackbar} severity="error">
            {error}
          </Alert>
        ) : (
          <Alert onClose={handleCloseSnackbar} severity="success">
            {successMessage}
          </Alert>
        )}
      </Snackbar>
      <Grid item xs={12}>
        <Button
          variant="text"
          color="primary"
          sx={{
            mt: 2,
            justifyContent: "flex-start",
            width: "100%",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Link href="/login" underline="none" sx={{ textDecoration: "none", color: "inherit" }}>
            Back to Login
          </Link>
        </Button>
      </Grid>
    </Grid>
  </Grid>
</Box>
);
}

export default PasswordReset;
