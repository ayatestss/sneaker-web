import { Button, TextField, Stack, Box, Alert, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Logo from '../../assets/ss-logo.svg';
import GoogleIcon from '@mui/icons-material/Google';
import * as Yup from 'yup'; // Import Yup validation library
import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseAuth } from '../../auth/firebase';

import { Formik, Form, Field, useField } from 'formik';
import { useNavigate } from 'react-router-dom';

const FormikTextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error;

  return (
    <TextField
      {...field}
      {...props}
      error={isError}
      helperText={isError ? meta.error : props.helperText}
    />
  );
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { handleLoginWithGoogle, handleLoginWithEmailAndPass, handleLogOut } =
    useContext(AuthContext);

  const handleLogin = async (type, values) => {
    try {
      switch (type) {
        case 'google':
          await handleLoginWithGoogle();
          break;
        case 'email':
          await handleLoginWithEmailAndPass(values.email, values.password);
          break;
        default:
          break;
      }
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      console.log(errorCode, errorMessage);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address for password reset.");
      return;
    }
    try {
      // Now `auth` is defined, so this should work
      await sendPasswordResetEmail(FirebaseAuth, email);
      alert("Password reset email sent. Please check your inbox.");
      setError(""); // Clear the error state if successful
    } catch (error) {
      setError("Failed to send password reset email. " + error.message);
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: 'black',
        padding: '20px',
      }}
    >
      <Stack alignItems="center" spacing={2} sx={{ width: '100%', maxWidth: '360px', px: 2 }}>
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{
            width: '80%',
            maxWidth: '300px',
            height: 'auto',
            my: 4,
            '@media (min-width:600px)': {
              maxWidth: '80%',
            },
          }}
        />
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
          {({ isSubmitting }) => (
            <Form>
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{
                  style: { color: 'white', borderColor: 'white' },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{
                  style: { color: 'white', borderColor: 'white' },
                }}
                sx={{ mt: 2 }}
              />
              <Typography
                variant="caption"
                sx={{
                  alignSelf: 'flex-start',
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { color: 'white' },
                }}
                onClick={handleForgotPassword}
              >
                Forgot password?
              </Typography>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                onClick={() => navigate('/dashboard')}
                sx={{
                  mt: 2,
                  color: 'white',
                  py: 1,
                }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                startIcon={<GoogleIcon />}
                sx={{
                  mt: 1,
                  color: 'white',
                  py: 1,
                }}
                onClick={() => handleLogin('google')}
              >
                Sign in with Google
              </Button>
              {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
              <Typography
                variant="body2"
                sx={{
                  mt: 4,
                  color: 'white',
                  textAlign: 'center',
                  '& span': {
                    color: 'yellow',
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  },
                }}
                onClick={() => navigate('/register')}
              >
                Not in the society? <span>Create an Account</span>
              </Typography>
            </Form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
}