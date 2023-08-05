import { Button, TextField, Stack, Box, Alert } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Logo from '../../assets/ss-logo.svg';
import GoogleIcon from '@mui/icons-material/Google';

import { Formik, Form, Field } from 'formik';

export default function LoginPage() {
  const [error, setError] = useState('');
  const { handleLoginWithGoogle, handleLoginWithEmailAndPass } =
    useContext(AuthContext);

  const handleLogin = async (e, type, values) => {
    try {
      e.preventDefault();
      switch (type) {
        case 'google':
          return handleLoginWithGoogle();
        case 'email':
          handleLoginWithEmailAndPass(values.email, values.password);
          break;
        default:
          break;
      }
    } catch (error) {
      setError(error.message);
      console.log(error.code, error.message);
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack alignItems="center" spacing={3} pb={7}>
        <img src={Logo} style={{ height: '30vh', width: 'auto' }} alt="Logo" />
        <Formik initialValues={initialValues}>
          {({ values, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                label="Email"
                name="email"
                style={{ paddingBottom: '1rem' }}
              />
              <Field
                as={TextField}
                fullWidth
                label="Password"
                name="password"
                type="password"
              />
              <Stack pt={2} spacing={2}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={(e) => handleLogin(e, 'email', values)}
                >
                  Sign In
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={(e) => handleLogin(e, 'google', values)}
                  startIcon={<GoogleIcon />}
                >
                  Sign In with Google
                </Button>
                {error && (
                  <Alert severity="error">
                    This is an error alert — check it out!
                  </Alert>
                )}
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
}
