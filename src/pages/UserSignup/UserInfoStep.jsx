import React from 'react';
import { Field } from 'formik';

import {
  TextField,
  Typography,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const UserInfoStep = ({ handleNext, setFieldValue }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Personal Information</Typography>
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={DatePicker}
          onChange={(value) => console.log(dayjs(value).format())}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Field component={Checkbox} type="checkbox" name="tos" />}
          label="I accept the Terms of Service"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserInfoStep;
