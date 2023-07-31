import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, Grid, Typography, Card } from "@mui/material";
import Sidebar from "../../dashboard/SideBar";
import KeyIcon from "@mui/icons-material/Key";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

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

        <Grid container spacing={2}>
          {/* General and Billing Settings */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* General Settings */}
              <Grid item xs={12}>
                <Card sx={{ height: "100%" }}>
                  <Link
                    to="/MemberSettingsForm"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardContent>
                      <AccountBoxIcon style={{ fontSize: "50px" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        General
                      </Typography>
                      <Typography>Update Personal Data</Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>

              {/* Billing Settings */}
              <Grid item xs={12}>
                <Card sx={{ height: "100%" }}>
                  <Link
                    to="/billing"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardContent>
                      <CreditCardIcon style={{ fontSize: "50px" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Billing
                      </Typography>
                      <Typography>Update Billing Information</Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>

              {/* Delete Account Settings */}
              <Grid item xs={12}>
                <Card>
                  <Link
                    to="/DeleteAccount"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardContent>
                      <PersonRemoveIcon style={{ fontSize: "50px" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Delete Account
                      </Typography>
                      <Typography>Delete Account Here</Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Membership and Password Settings */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Membership Settings */}
              <Grid item xs={12}>
                <Card sx={{ height: "100%" }}>
                  <Link
                    to="/MemberShipTier"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardContent>
                      <CardMembershipIcon style={{ fontSize: "50px" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Membership
                      </Typography>
                      <Typography>Update Membership Plan</Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>

              {/* Password Settings */}
              <Grid item xs={12}>
                <Card>
                  <Link
                    to="/ChangePasswordPage"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardContent>
                      <KeyIcon style={{ fontSize: "50px" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Password
                      </Typography>
                      <Typography>Update Password Information</Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MemberSettings;
