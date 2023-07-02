import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, Link as RouterLink } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SIGNUP_MUTATION = gql`
  mutation Signup(
    $firstName: String!
    $lastName: String!
    $dob: String!
    $email: String!
    $password: String!
    $address: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      dob: $dob
      email: $email
      password: $password
      address: $address
    ) {
      id
      firstName
      lastName
      dob
      email
      password
      address
    }
  }
`;

const SignupPage = () => {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {};
  useEffect(() => {
    changePassword();
  }, []);

  const [signup] = useMutation(SIGNUP_MUTATION);

  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          dob: "",
          email: "",
          password: "",
          setPassword: "",
          address: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().max(255).required("First Name is required"),
          lastName: Yup.string().max(255).required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(16).required("Password is required"),
          setPassword: Yup.string()
            .max(255)
            .required("set password is required"),
          address: Yup.string().max(255).required("Address is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const { data } = await signup({
              variables: {
                firstName: values.firstname,
                lastName: values.lastname,
                dob: values.dob,
                email: values.email,
                password: values.password,
                address: values.address,
              },
            });

            // Handle successful signup
            console.log("User signed up successfully:", data.signup);

            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ success: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">First Name</InputLabel>
                  <OutlinedInput
                    fullwidth
                    error={Boolean(touched.firstname && errors.firstname)}
                    id="firstname-signup"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Last Name</InputLabel>
                  <OutlinedInput
                    fullwidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Last Name"
                    inputProps={{}}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">
                    Date of Birth
                  </InputLabel>
                  <OutlinedInput
                    fullwidth
                    error={Boolean(touched.dob && errors.odb)}
                    id="dob-signup"
                    type="dob"
                    value={values.dob}
                    name="dob"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="5/27/1994"
                    inputProps={{}}
                  />
                  {touched.dob && errors.dob && (
                    <FormHelperText error id="helper-text-dob-signup">
                      {errors.dob}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="address-signup">Address</InputLabel>
                  <OutlinedInput
                    fullwidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="address-signup"
                    type="address"
                    value={values.address}
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Address"
                    inputProps={{}}
                  />
                  {touched.address && errors.address && (
                    <FormHelperText error id="helper-text-address-signup">
                      {errors.address}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address</InputLabel>
                  <OutlinedInput
                    fullwidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-signup"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Email Address"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullwidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibilty"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="*****"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormerHelperText error id="helper-text-password=signup">
                      {errors.password}
                    </FormerHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid>
                      <Box
                        sx={{
                          bgcolor: level?.color,
                          width: 85,
                          height: 8,
                          borderRadius: "7px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  By Signing up, you agree to our &nbsp;
                  <Link variant="subtitled2" component={RouterLink} to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtittle2" component={RouterLink} to="#">
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignupPage;
