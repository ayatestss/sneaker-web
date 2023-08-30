import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../../../dashboard/SideBar";
import firebase from "firebase/app";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      firebase
        .auth()
        .sendPasswordResetEmail(values.email)
        .then(() => {
          console.log("Password changed successfully!");
        })
        .catch((err) => {
          console.error("Password change failed", err.message);
        });
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
          Reset Password
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box
            display="grid"
            gap="20px"
            gridTemplateColumns={
              isNonMobile ? "repeat(4, minmax(0, 1fr))" : "1fr"
            }
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                gridColumn: "span 4",
              }}
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
              <Button variant="contained" onClick={navigate}>
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
