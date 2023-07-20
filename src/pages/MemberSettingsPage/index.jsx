import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import KeyIcon from "@mui/icons-material/Key";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

const MemberSettings = () => {
  const navigate = useNavigate();

  return (
    <Box
      m="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="80%"
      maxWidth="400px"
      borderRadius="8px"
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.1"
      p="20px"
    >
      <Typography variant="h4" sx={{ mb: "20px", fontWeight: "bold" }}>
        Account Settings
      </Typography>

      <Link
        component={Box}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#424242",
          padding: "16px",
          width: "250px",
          height: "90px",
          marginBottom: "20px",
          marginTop: "20px",
          cursor: "pointer",
          textDecoration: "none",
          color: "white",
        }}
        to="/MemberSettingsForm"
      >
        <AccountBoxIcon style={{ fontSize: "50px", marginRight: "8px" }} />
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>General</Typography>
          <Typography>Update Personal Data</Typography>
        </Box>
      </Link>
      <Link
        component={Box}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#424242",
          padding: "16px",
          width: "250px",
          height: "90px",
          marginBottom: "20px",
          cursor: "pointer",
          textDecoration: "none",
          color: "white",
        }}
        to="/update/billing"
      >
        <CreditCardIcon style={{ fontSize: "50px", marginRight: "8px" }} />
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Billing</Typography>
          <Typography>Update Billing Information</Typography>
        </Box>
      </Link>
      <Link
        component={Box}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#424242",
          padding: "16px",
          width: "250px",
          height: "90px",
          marginBottom: "20px",
          cursor: "pointer",
          textDecoration: "none",
          color: "white",
        }}
        to="/MemberShipTier"
      >
        <CardMembershipIcon style={{ fontSize: "50px", marginRight: "8px" }} />
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Membership</Typography>
          <Typography>Update Membership Plan</Typography>
        </Box>
      </Link>
      <Link
        component={Box}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#424242",
          padding: "16px",
          width: "250px",
          height: "90px",
          marginBottom: "20px",
          cursor: "pointer",
          textDecoration: "none",
          color: "white",
        }}
        to="/ChangePasswordPage"
      >
        <KeyIcon style={{ fontSize: "50px", marginRight: "8px" }} />
        <Box>
          <Typography sx={{ fontWeight: "bold" }}> Password</Typography>
          <Typography>Update Password Information</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default MemberSettings;
