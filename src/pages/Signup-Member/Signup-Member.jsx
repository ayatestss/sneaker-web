import React, { useState } from "react";
<<<<<<< HEAD
import Logo from "../../assets/ss-logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik, Form, useField } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Alert, Grid, TextField, Stack, Box } from "@mui/material";
import * as Yup from "yup";
import { signUpWithGoogle, signUpWithEmailPassword } from "../../auth/firebase";

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
=======
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { Button, Container, Alert } from "@mui/material";
import FormikTextField from "./FormikTextField";
import { signUpWithEmailPassword } from "../services/authService";

const SignupMember = () => {
  const history = useHistory();
>>>>>>> a172c5f ("Signup member page first commit")
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const firebaseId = await signUpWithEmailPassword(
        values.email,
        values.password
      );
<<<<<<< HEAD
      navigate("/signup-info");
=======
      history.push("/signup-info");
>>>>>>> a172c5f ("Signup member page first commit")
    } catch (error) {
      setError(error.message);
    }
  };

<<<<<<< HEAD
  const handleGoogleSignUp = async () => {
    try {
      const firebaseId = await signUpWithGoogle();
      navigate("/signup-info");
    } catch (error) {
      setError(error.message);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
=======
  return (
    <Container maxWidth="md">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={`../../assets/SNEAKER SOCIETY (Transparency).png`} />
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            }
            return errors;
          }}
        >
          {() => (
>>>>>>> a172c5f ("Signup member page first commit")
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormikTextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
<<<<<<< HEAD
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
                  onClick={handleSubmit}
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
                  onClick={handleGoogleSignUp}
                >
                  SIGN UP WITH GOOGLE
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>

=======
                </Grid>
              </Grid>

              <Button type="submit" variant="contained" color="primary">
                SIGN UP
              </Button>
              <Button variant="contained" color="primary">
                SIGN UP WITH GOOGLE
              </Button>
            </Form>
          )}
        </Formik>
>>>>>>> a172c5f ("Signup member page first commit")
        {error && (
          <Alert severity="error" color="error">
            {error}
          </Alert>
        )}
<<<<<<< HEAD
      </Stack>
    </Box>
=======
        <img src="data:image/png;base64,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" />
      </div>
    </Container>
>>>>>>> a172c5f ("Signup member page first commit")
  );
};

export default SignupMember;
