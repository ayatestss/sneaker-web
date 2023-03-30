import React, { useState } from 'react';
import { Box, Button, InputBase, Stack, Snackbar, Grid } from '@mui/material';
import Logo from '../../assets/ss-logo.svg';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../../auth/services';
import { FirebaseAuth } from '../../auth/firebase';
import Alert from '@mui/lab/Alert';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(FirebaseAuth, email, password);
    setSuccessMessage("Logged in successfully.");
  } catch (error) {
    const errorMessage = error.message;
    setError(errorMessage);
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
      width="100%"
      height="100vh"
      bgcolor="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
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
      <Stack spacing={3} pb={7}>
        <InputBase
          style={{
            border: 'solid white',
            borderRadius: '0.2rem',
            width: '30vh',
            height: '5vh',
            fontSize: '2vh',
            background: 'white',
          }}
          placeholder="Enter your email address"
          required
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBase
          style={{
            border: 'solid white',
            borderRadius: '0.2rem',
            width: '30vh',
            height: '5vh',
            fontSize: '2vh',
            background: 'white',
          }}
          placeholder="Enter your password"
          required
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Stack direction="row" justifyContent="center">
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
        <Link
          to="/passwordReset"
          style={{
            textDecoration: 'none',
            color: '#FFD700',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          Forgot Password?
        </Link>
            <Link
          to="/registerPage"
          style={{
            textDecoration: 'none',
            color: '#FFD700',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          Create an Account
        </Link>    
<Snackbar
  open={error !== null || successMessage !== null}
  autoHideDuration={3000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  action={(key) => (
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
      </Stack>
    </Box>
  );
}

export default LoginPage;