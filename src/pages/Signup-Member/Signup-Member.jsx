import React, { useState } from "react";
import Logo from "../../assets/ss-logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik, Form, useField } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Alert,
  Grid,
  TextField,
  Stack,
  Box,
} from "@mui/material";

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

const SignupMember = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const firebaseId = await signUpWithEmailPassword(
        values.email,
        values.password
      );
      navigate("/signup-info");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="md">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            bgcolor: "black",
            padding: "20px",
          }}
        >
          <Stack
            alignItems="center"
            spacing={2}
            sx={{ width: "100%", maxWidth: "360px", px: 2 }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                width: "80%",
                maxWidth: "300px",
                height: "auto",
                my: 4,
                "@media (min-width:600px)": {
                  maxWidth: "80%",
                },
              }}
            />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is required";
                }

                if (!values.password) {
                  errors.password = "Password is required";
                }

                return errors;
              }}
            >
              {() => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormikTextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                      />
                      <FormikTextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        sx={{
                          mt: 2,
                          py: 1,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Stack>
                    <Button
                      type="submit"
                      variant="contained"
                      aria-label="Sign Up"
                      sx={{
                        mt: 2,
                        py: 1,
                      }}
                    >
                      SIGN UP
                    </Button>
                    <Button
                      variant="contained"
                      aria-label="Sign Up With Google"
                      startIcon={<GoogleIcon />}
                      sx={{
                        mt: 2,
                      }}
                    >
                      SIGN UP WITH GOOGLE
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
            {error && (
              <Alert severity="error" color="error">
                {error}
              </Alert>
            )}
          </Stack>
        </Box>
      </div>
    </Container>
  );
};

export default SignupMember;
