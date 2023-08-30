import React from "react";
import { Box, CardContent, Grid, Typography, Card } from "@mui/material";
import Sidebar from "../../dashboard/SideBar";
import KeyIcon from "@mui/icons-material/Key";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import SettingsLink from "./SettingsLink";

const MemberSettings = () => {

  return (
    <Box display="flex">
      <Sidebar />
      <Box m="20px" flexGrow={1} p={2}>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h2"
          marginBottom="20px"
        >
          Account Settings
        </Typography>

        <SettingsLink
          to="/MemberSettingsForm"
          icon={<AccountBoxIcon style={{ fontSize: "50px", marginRight: "8px" }} />}
          title="General"
          description="Update Personal Data"
        />

        <SettingsLink to="/update/billing"
          icon={<CreditCardIcon style={{ fontSize: "50px", marginRight: "8px" }} />}
          title="Billing"
          description="Update Billing Information"
        />

        <SettingsLink
          to="/MemberShipTier"
          icon={<CardMembershipIcon style={{ fontSize: "50px", marginRight: "8px" }} />}
          title="Membership"
          description="Update Membership Plan"
        />

        <SettingsLink
          to="/ChangePasswordPage"
          icon={<KeyIcon style={{ fontSize: "50px", marginRight: "8px" }} />}
          title="Password"
          description="Update Password Information"
        />

      </Box>
    </Box>
  )
}

export default MemberSettings;
