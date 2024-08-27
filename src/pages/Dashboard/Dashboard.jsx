import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import ContractStatusWidget from "../../components/ContractStatusWidget";
import { QrWidget } from "../../components/qrWidget";
import StripeWidget from "../../components/StripeWidget";
import ContractWidget from "../HomePage/ContractWidget";

export const Dashboard = () => {
  const WidgetPlaceholder = ({ color, height, children }) => (
    <div
      style={{
        height: height,
        marginBottom: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "16px",
      }}
    >
      {children}
    </div>
  );

  return (
    <Container maxWidth="lg" style={{ height: "100vh" }}>
      <Typography variant="h1" fontWeight="bold">
        Welcome Kyle
      </Typography>

      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={12} md={6}>
          <ContractWidget />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <WidgetPlaceholder color="lightgreen" height="100%">
              <ContractStatusWidget />
            </WidgetPlaceholder>
            <WidgetPlaceholder height="100%">
              <StripeWidget />
            </WidgetPlaceholder>
            <WidgetPlaceholder color="red" height="100%">
              <QrWidget />
            </WidgetPlaceholder>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
