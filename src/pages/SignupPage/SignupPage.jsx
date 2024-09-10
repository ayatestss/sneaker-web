import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import {
  Button,
  Typography,
  Grid,
  TextField,
  Container,
  Alert,
  Box,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { UPDATE_MEMBER } from "./signup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextv2";
import { usStates } from "../../utils/usStates";

const FormikTextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  const handleChange = (event) => {
    const { value } = event.target;
    const numbers = value.replace(/\D/g, "");
    form.setFieldValue(field.name, numbers);

    if (name === "phoneNumber") {
      value = value.replace(/\D/g, "");
      // Format as (xxx) xxx-xxxx
      if (value.length > 0) {
        value = value
          .match(/^(\d{0,3})(\d{0,3})(\d{0,4})/)
          .slice(1)
          .join("-");
        value = value.replace(/^(\d{3})-?/, "($1) ");
      }
    } else if (name === "zipcode") {
      // Remove non-numeric characters for zipcode
      value = value.replace(/\D/g, "");
    }

    helpers.setValue(value);
  };
  const ZipCodeInput = ({ field, form, ...props }) => {
    const handleChange = (event) => {
      const { value } = event.target;
      const numbers = value.replace(/\D/g, "");
      form.setFieldValue(field.name, numbers);
    };

    return (
      <TextField
        {...field}
        {...props}
        error={isError}
        helperText={isError ? meta.error : props.helperText}
        inputProps={{
          ...props.inputProps,
          maxLength:
            name === "phoneNumber" ? 14 : name === "zipcode" ? 5 : undefined,
        }}
      />
    );
  };
};
const SignupPage = () => {
  const navigate = useNavigate();

  const { user, refetchUser } = useAuth();

  const handleSubmit = async (values) => {
    try {
      await updateMember({
        variables: {
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            addressLineOne: values.addressLineOne,
            addressLineTwo: values.addressLineTwo,
            zipcode: values.zipcode,
            state: values.state,
            phoneNumber: values.phoneNumber.replace(/\D/g, ""),
            isNewUser: false,
          },
        },
      });
      await refetchUser();
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  const [updateMember, { data, loading }] = useMutation(UPDATE_MEMBER);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container maxWidth="md" sx={{ height: "100vh" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography pb={4} variant="h1">
          More User Info
        </Typography>
        <Formik
          initialValues={{
            email: user.email || "",
            firstName: "",
            lastName: "",
            addressLineOne: "",
            addressLineTwo: "",
            zipcode: "",
            state: "",
            phoneNumber: "",
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};

            if (!values.firstName) {
              errors.firstName = "First Name is required";
            }
            if (!values.zipcode) {
              errors.zipcode = "Zip Code is required";
            } else if (!/^\d{5}(-\d{4})?$/.test(values.zipcode)) {
              errors.zipcode =
                "Invalid Zip Code. Use format: 12345 or 12345-6789";
            }
            if (!values.phoneNumber) {
              errors.phoneNumber = "Phone Number is required";
            } else if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(values.phoneNumber)) {
              errors.phoneNumber =
                "Invalid Phone Number. Please enter 10 digits.";
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
                    disabled
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormikTextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormikTextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="addressLineOne"
                    label="Address Line 1"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="addressLineTwo"
                    label="Address Line 2"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormikTextField
                    name="zipcode"
                    label="Zipcode"
                    variant="outlined"
                    fullWidth
                    component={ZipCodeInput}
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormikTextField
                    name="state"
                    label="State"
                    options={usStates}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box sx={{ paddingTop: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        {errorMessage ? (
          <Alert severity="error" color="error">
            {errorMessage}
          </Alert>
        ) : null}

        {/* <img src="data:image/png;base64,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" /> */}
      </div>
    </Container>
  );
};

export default SignupPage;
