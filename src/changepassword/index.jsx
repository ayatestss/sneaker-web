import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    schema
      .validate(
        { currentPassword, newPassword, confirmPassword },
        { abortEarly: false }
      )
      .then(() => {
        // Submit form
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const schema = yup.object().shape({
    currentPassword: yup.string().required("Current password is required"),
    newPassword: yup
      .string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });

  return (
    <Box m="20px">
      <Formik>
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: "span 4" },
            }}
          >
            <TextField
              fullWidth
              label="Current Password"
              variant="filled"
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              error={!!errors.currentPassword}
              helperText={errors.currentPassword}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              label="New Password must be at least 8 characters"
              variant="filled"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              variant="filled"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ gridColumn: "span 2" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Save Changes
            </Button>
          </Box>
        </form>
      </Formik>
    </Box>
  );
};

export default ChangePasswordPage;
