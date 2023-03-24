import { Box, Button, InputBase, Stack, Snackbar } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Logo from '../../assets/ss-logo.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { handleLoginWithGoogle } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
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
      <Stack spacing={2} pb={3}>
        <img src={Logo} style={{ height: 'auto', width: 'auto' }} alt="Logo" />
      </Stack>
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
        <Snackbar
          open={error !== null}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message={error}
          action={(key) => (
            <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
              Close
            </Button>
          )}
        />
      </Stack>
    </Box>
  );
}

export default LoginPage;
