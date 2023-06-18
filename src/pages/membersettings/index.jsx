import * as React from "react";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, useTheme, Container, Grid } from "@mui/material";
import Form from "../../membersettingsform";
import PricingCard from "../../pricing";
import ChangePasswordPage from "../../changepassword";
import Sidebar from "../../dashboard/NewSideBar";

const MemberSettings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Box m="20px">
            <Header title="Member Settings" />
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  fontWeight={"bold"}
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Update Personal Settings
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Form />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  fontWeight={"bold"}
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Update Subscription
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PricingCard
                  title="Basic Plan"
                  price="$8.00/month"
                  headline="Includes access to all basic features."
                  features="Chat widget"
                  buttonText="Choose Plan"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  fontWeight={"bold"}
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Update Password
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ChangePasswordPage />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MemberSettings;
