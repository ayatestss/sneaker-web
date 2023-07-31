import * as React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Sidebar from "../../../dashboard/SideBar";
import { Link } from "react-router-dom";

const MemberShipTier = () => {
  const handleBackClick = () => {
    history.push("/MemberSettings");
  };
  return (
    <Box display="flex">
      <Sidebar />
      <Box m="20px">
        <Typography sx={{ fontWeight: "bold" }} variant="h2" marginBottom="5px">
          Choose Your Plan
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h5"
          marginBottom="20px"
        >
          Plans updates will take up to 24 hours to take effect{" "}
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap="20px"
          justifyContent="center"
        >
          <Box
            p="20px"
            borderRadius="10px"
            fontWeight="bold"
            boxShadow="0 4px 10px rgba(0,0,0 0.1)"
            bgcolor="#555555"
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h3" mb="20px">
              Basic Plan
            </Typography>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              color="#FFFFFF"
              mb="20px"
            >
              $9.99/month
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">Add Up To 5 Services</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">Client User Chat Feature</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">Invoice Tracking</Typography>
            </Box>
            <Button variant="contained" color="primary">
              Choose Plan
            </Button>
          </Box>
          <Box
            p="20px"
            borderRadius="10px"
            boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
            bgcolor="#555555"
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h3" mb="20px">
              Pro Plan
            </Typography>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              color="#FFFFFF"
              mb="20px"
            >
              $19.99/month
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">Add up to 10 Services</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">All Features from prior plans</Typography>
            </Box>
            <Button variant="contained" color="primary">
              Upgrade To Pro
            </Button>
          </Box>
          <Box
            p="20px"
            borderRadius="10px"
            boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
            bgcolor="#555555"
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h3" mb="20px">
              Premium Plan
            </Typography>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              color="#FFFFFF"
              mb="20px"
            >
              $29.99/month
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">Unlimited Services</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">Download Chat Archives</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CheckIcon style={{ fontSize: "16px", marginRight: "8px" }} />
              <Typography mb="2px">All Features from prior plans</Typography>
            </Box>

            <Button variant="contained" color="primary">
              Choose Plan
            </Button>
          </Box>{" "}
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
        </Box>
      </Box>
    </Box>
  );
};

export default MemberShipTier;
