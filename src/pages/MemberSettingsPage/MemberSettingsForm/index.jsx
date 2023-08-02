import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "../../../dashboard/SideBar";

const MemberSettingsForm = () => {

  const history = useHistory();

  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  const handleBackClick = () => {
    history.push("/MemberSettings");
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("phone number is required"),
    address1: yup.string().required("address1 is required"),
    address2: yup.string().required("address2 is required"),
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address1: "",
      address2: "",
      email: "",
    }
  })

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
          Edit Profile
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            onClick={handleIconClick}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 75,
              height: 75,
              marginBottom: "10px",
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Add A Photo
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="grid"
            gap="20px"
            gridTemplateColumns="1fr"
            sx={{
              "&  > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <Box display="flex" gap="30px" flexDirection="row">
              <TextField
                fullWidth
                id="firstName"
                value={formik.values.firstName}
                label="First Name"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                error={formik.touched.firstName && !!formik.errors.firstName}
                helperText={formik.touched.firstName && !!formik.errors.firstName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                id="lastName"
                value={formik.values.lastName}
                label="Last Name"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                error={formik.touched.lastName && !!formik.errors.lastName}
                helperText={formik.touched.lastName && !!formik.errors.lastName}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" gap="30px" flexDirection="row">
              <TextField
                fullWidth
                id="email"
                name="email"
                value={formik.values.email}
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                id="phone"
                name="phone"
                value={formik.values.phone}
                label="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" gap="30px" flexDirection="row">

              <TextField
                fullWidth
                id="address-1"
                name="address1"
                value={formik.values.address1}
                label="Address 1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                error={formik.touched.address1 && !!formik.errors.address1}
                helperText={formik.touched.address1 && formik.errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                id="address-2"
                name="address2"
                value={formik.values.address2}
                label="Address 2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                error={formik.touched.address2 && !!formik.errors.address2}
                helperText={formik.touched.address2 && formik.errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Link to="/membersettings">
              <Button
                variant="contained"
                sx={{
                  Link: "/membersettings",
                }}
                onClick={handleBackClick}
              >
                Back
              </Button>
            </Link>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default MemberSettingsForm;
