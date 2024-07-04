import React, { useState } from "react";
import Logo from "../../assets/ss-logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik, Form, useField } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Alert, Grid, TextField, Stack, Box } from "@mui/material";
import * as Yup from "yup";
import { signUpWithEmailPassword, signUpWithGoogle } from "../../auth/services";

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

  const handleGoogleSignUp = async () => {
    try {
      const firebaseId = await signUpWithGoogle();
      navigate("/signup-info");
    } catch (error) {
      setError(error.message);
    }
  };

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
          sx={{ width: "80%", maxWidth: "300px", height: "auto", my: 4 }}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
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
                    sx={{ mt: 2 }}
                  />
                </Grid>
              </Grid>
              <Stack>
                <Button
                  type="submit"
                  variant="contained"
                  aria-label="Sign Up"
                  sx={{ mt: 2 }}
                >
                  SIGN UP
                </Button>
                <Button
                  variant="contained"
                  aria-label="Sign Up With Google"
                  startIcon={<GoogleIcon />}
                  sx={{ mt: 2 }}
                  onClick={handleGoogleSignUp}
                >
                  SIGN UP WITH GOOGLE
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default SignupMember;
