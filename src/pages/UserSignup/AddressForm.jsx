import { TextField, Button, Grid } from '@mui/material';
import { Field } from 'formik';

export const AddressForm = ({ handleSubmit, handlePrevious }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          as={TextField}
          name="street"
          label="Street Address"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as={TextField}
          name="city"
          label="City"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as={TextField}
          name="state"
          label="State"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as={TextField}
          name="zipCode"
          label="Zip Code"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handlePrevious}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
