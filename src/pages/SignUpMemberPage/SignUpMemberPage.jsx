import React, { useState } from "react";
import Logo from "../../assets/ss-logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik, Form, useField } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Alert, Grid, TextField, Stack, Box } from "@mui/material";
import * as Yup from "yup";
<<<<<<< HEAD
import { signUpWithEmailPassword, signUpWithGoogle } from "../../auth/services";

const FormikTextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

=======

const FormikTextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);
>>>>>>> f2791af ("first commit of new signupmember branch")
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
<<<<<<< HEAD
  //const [submitting, setSubmitting] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setError("");
=======

  const handleSubmit = async (values) => {
>>>>>>> f2791af ("first commit of new signupmember branch")
    try {
      const firebaseId = await signUpWithEmailPassword(
        values.email,
        values.password
      );
      navigate("/signup-info");
    } catch (error) {
      setError(error.message);
<<<<<<< HEAD
    } finally {
      setSubmitting(false);
=======
>>>>>>> f2791af ("first commit of new signupmember branch")
    }
  };

  const handleGoogleSignUp = async () => {
<<<<<<< HEAD
    setError("");
=======
>>>>>>> f2791af ("first commit of new signupmember branch")
    try {
      const firebaseId = await signUpWithGoogle();
      navigate("/signup-info");
    } catch (error) {
      setError(error.message);
    }
  };

  const initialValues = { email: "", password: "" };

<<<<<<< HEAD
  const validationSchema = Yup.object({
=======
  const validationSchema = Yup.object().shape({
>>>>>>> f2791af ("first commit of new signupmember branch")
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
<<<<<<< HEAD
          {({ isSubmitting }) => (
=======
          {({ isSubmitting, values }) => (
>>>>>>> f2791af ("first commit of new signupmember branch")
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
<<<<<<< HEAD
                    sx={{ mt: 2 }}
=======
                    sx={{ mt: 2, py: 1 }}
>>>>>>> f2791af ("first commit of new signupmember branch")
                  />
                </Grid>
              </Grid>
              <Stack>
                <Button
                  type="submit"
                  variant="contained"
                  aria-label="Sign Up"
<<<<<<< HEAD
                  sx={{ mt: 2 }}
=======
                  sx={{ mt: 2, py: 1 }}
>>>>>>> f2791af ("first commit of new signupmember branch")
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
<<<<<<< HEAD
          <Alert severity="error" sx={{ mt: 2 }}>
=======
          <Alert severity="error" color="error">
>>>>>>> f2791af ("first commit of new signupmember branch")
            {error}
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default SignupMember;
