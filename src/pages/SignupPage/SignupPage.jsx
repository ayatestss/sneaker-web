import React, { useContext, useState } from 'react';
import { Formik, Form, useField } from 'formik';
import {
  Button,
  Typography,
  Grid,
  TextField,
  Container,
  Alert,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_MEMBER } from './signup';
import { AuthContext } from '../../context/authContext';
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

const SignupPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const user = currentUser();
  console.log({ user });
  const handleSubmit = async (values) => {
    try {
      await createMember({
        variables: {
          data: {
            firebaseId: user.userId,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            addressLineOne: values.addressLineOne,
            addressLineTwo: values.addressLineTwo,
            zipcode: values.zipcode,
            state: values.state,
            phoneNumber: values.phoneNumber,
          },
        },
      });
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const [errorMessage, setErrorMessage] = useState('');

  const [createMember, { data, loading }] = useMutation(CREATE_MEMBER);

  return (
    <Container maxWidth="md">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography pb={4} variant="h1">
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            addressLineOne: '',
            addressLineTwo: '',
            zipcode: '',
            state: '',
            phoneNumber: '',
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};

            if (!values.firstName) {
              errors.firstName = 'First Name is required';
            }

            // Add similar validation rules for other fields

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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormikTextField
                    name="state"
                    label="State"
                    variant="outlined"
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
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
        {errorMessage ? (
          <Alert severity="error" color="error">
            {errorMessage}
          </Alert>
        ) : null}
      </div>
    </Container>
  );
};

export default SignupPage;
