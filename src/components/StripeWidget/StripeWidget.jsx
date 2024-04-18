import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

function StripeWidget() {
  const dummyData = {
    nextPayout: {
      date: "3 days",
      amount: 1500,
    },
    growthPercentage: 20,
  };

  return (
    <Box
      sx={{
        border: "3px solid #ccc",
        borderRadius: "10px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "65%",
        height: "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column">
        <Box
          sx={{
            display: "flex",
            bgcolor: "green",
            borderRadius: "50px",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "50px",
            marginBottom: "15px",
          }}
        >
          <Typography sx={{ mt: 1, fontSize: 30 }}>
            +{dummyData.growthPercentage}%
          </Typography>
        </Box>
        <Typography variant="h4">
          Next Payout: {dummyData.nextPayout.date}
        </Typography>
        <Typography sx={{ fontSize: 60 }}>
          ${dummyData.nextPayout.amount}
        </Typography>
      </Stack>
      <Stack direction="column" marginLeft={15}>
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            color: "white",
            borderColor: "white",
            border: "2px solid #ccc",
            borderRadius: "10px",
            width: "120px",
            height: "50px",
          }}
          onClick={() => console.log("Navigate to statements")}
        >
          Statements
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            border: "2px solid #ccc",
            borderRadius: "10px",
            width: "120px",
            height: "50px",
            position: "relative",
          }}
          onClick={() => console.log("Navigate to Stripe Dashboard")}
        >
          Stripe
          <Box
            sx={{
              width: "15px",
              height: "15px",
              bgcolor: "red",
              borderRadius: "50%",
              position: "absolute",
              left: "15px",
            }}
          />
        </Button>
      </Stack>
    </Box>
  );
}

export default StripeWidget;
