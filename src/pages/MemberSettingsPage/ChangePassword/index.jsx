import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../dashboard/SideBar";
import { Link } from "react-router-dom";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    history.push("/MemberSettings");
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

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box display="flex">
      <Sidebar />
      <Box m="20px">
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h2"
          marginBottom="20px"
        >
          Set New Password
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box
            display="grid"
            gap="20px"
            gridTemplateColumns={isNonMobile ? "repeat(4, minmax(0, 1fr))" : "1fr"}
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Current Password"
              variant="outlined"
              type="password"
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.currentPassword &&
                !!formik.errors.currentPassword
              }
              helperText={
                formik.touched.currentPassword && formik.errors.currentPassword
              }
              sx={{
                gridColumn: "span 4",
              }}
            />
            <TextField
              label="New Password"
              variant="outlined"
              type="password"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.newPassword && !!formik.errors.newPassword}
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.newPassword
              }
              sx={{ gridColumn: "span 4" }}
            />
            <Box display="flex" mt="20px" gap="30px" gridColumn="span 4">
              <Button
                variant="contained"
                color="primary"
                onClick={formik.handleReset}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Box>
            <Button
              size="small"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/LoginPage")}
            >
              Back to log in
            </Button>
            <Link to="/membersettings">
              <Button
                variant="contained"
                onClick={handleBackClick}
                sx={{
                  Link: "/membersettings",
                }}
              >
                Back
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ChangePasswordPage;
