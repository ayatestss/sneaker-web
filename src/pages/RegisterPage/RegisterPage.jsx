import React, { useState } from 'react';
import {
  Box,
  Button,
  InputBase,
  Stack,
  Snackbar,
  Grid,
  Typography,
} from '@mui/material';
import Logo from '../../assets/ss-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
} from '../../auth/services';
import Alert from '@mui/lab/Alert';

function RegisterPage() {
  const [alertType, setAlertType] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setAlertType("error");
      return;
    }
    try {
      await createUserWithEmailAndPassword(email, password);
      setError("Account created successfully.");
      setAlertType("success");

      // Redirect to the login page after a brief delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
      setAlertType("error");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
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
          <Stack spacing={3} pb={7}>
            <InputBase
              placeholder="Enter your email address"
              required
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                border: "solid white",
                borderRadius: "0.2rem",
                width: "100%",
                height: "5vh",
                fontSize: "2vh",
                background: "white",
              }}
            />
            <InputBase
              placeholder="Enter your password"
              required
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                border: "solid white",
                borderRadius: "0.2rem",
                width: "100%",
                height: "5vh",
                fontSize: "2vh",
                background: "white",
              }}
            />
            <InputBase
              placeholder="Confirm your password"
              required
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                border:             "solid white",
            borderRadius: "0.2rem",
            width: "100%",
            height: "5vh",
            fontSize: "2vh",
            background: "white",
          }}
        />
        <Stack direction="row" justifyContent="center">
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </Stack>
<Typography textAlign="center" mt={2}>
  <Link
    to="/login"
          style={{
            textDecoration: 'none',
            color: '#FFD700',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '1rem',
          }}
  >
    Already have an account? Login
  </Link>
</Typography>
        <Snackbar
          open={error !== null}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          action={(key) => (
            <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
              Close
            </Button>
          )}
          sx={{
            position: 'fixed',
            bottom: '20%',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        >
          <Alert onClose={handleCloseSnackbar} severity={alertType} sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      </Stack>
    </Grid>
  </Grid>
</Box>
);
}

export default RegisterPage;

