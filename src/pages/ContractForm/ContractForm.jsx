import React from "react";
import { Formik, Form, Field } from "formik";
import Box from "@mui/material/Box";
import { Container, TextField, Button, Stack, Typography } from "@mui/material";
import PhotoInput from "./PhotoInput";

export default function ContractForm() {
  const initialValues = {
    brand: "",
    model: "",
    serviceWanted: "",
    notes: "",
    pictures: [],
    size: 0,
  };

  const FormikTextField = ({ name, label, type = "text", ...rest }) => (
    <Field name={name}>
      {({ field, meta }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          fullWidth
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error}
          {...rest}
        />
      )}
    </Field>
  );

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Box>
            <Typography
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              variant="h1"
            >
              Shoe Info
            </Typography>
          </Box>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => {
              return (
                <Form>
                  <Box>
                    <Stack spacing={2}>
                      <FormikTextField name="brand" label="Brand" />
                      <FormikTextField name="model" label="Model" />
                      <FormikTextField
                        name="size"
                        label="Size"
                        type="number"
                        min={0}
                      />
                      <FormikTextField
                        name="serviceWanted"
                        label="What do you want done?"
                        multiline
                        rows={4}
                      />
                      <FormikTextField
                        name="notes"
                        label="Notes"
                        multiline
                        rows={4}
                      />
                      <PhotoInput
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        sx={{
                          mt: 2,
                          color: "white",
                          py: 1,
                        }}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
}
