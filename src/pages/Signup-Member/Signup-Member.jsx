import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Container, Alert } from "@mui/material";

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
        <img src={`../../assets/SNEAKER SOCIETY (Transparency).png`} />
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
        {error && (
          <Alert severity="error" color="error">
            {error}
          </Alert>
        )}
        <img src="data:image/png;base64,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" />
      </div>
    </Container>
  );
};

export default SignupMember;
