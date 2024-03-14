import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

function StripeWidget() {
  const dummyData = {
    nextPayout: {
<<<<<<< HEAD
      date: "3 days",
=======
      date: "2 days",
>>>>>>> f9b51f6 ("Stripe Widget Component")
      amount: 1500,
    },
    growthPercentage: 20,
  };

  return (
    <Box
      sx={{
        border: "3px solid #ccc",
        borderRadius: "10px",
<<<<<<< HEAD
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
=======
        height: "250px",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Stack>
>>>>>>> f9b51f6 ("Stripe Widget Component")
        <Box
          sx={{
            display: "flex",
            bgcolor: "green",
            borderRadius: "50px",
            justifyContent: "center",
<<<<<<< HEAD
            alignItems: "center",
            width: "150px",
            height: "50px",
            marginBottom: "15px",
=======
>>>>>>> f9b51f6 ("Stripe Widget Component")
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
<<<<<<< HEAD
      <Stack direction="column" marginLeft={15}>
=======
      <Stack direction="column" marginLeft={25}>
>>>>>>> f9b51f6 ("Stripe Widget Component")
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            color: "white",
<<<<<<< HEAD
            borderColor: "white",
            border: "2px solid #ccc",
            borderRadius: "10px",
            width: "120px",
            height: "50px",
=======
>>>>>>> f9b51f6 ("Stripe Widget Component")
          }}
          onClick={() => console.log("Navigate to statements")}
        >
          Statements
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "white",
<<<<<<< HEAD
            borderColor: "white",
            border: "2px solid #ccc",
            borderRadius: "10px",
            width: "120px",
            height: "50px",
            position: "relative",
=======
>>>>>>> f9b51f6 ("Stripe Widget Component")
          }}
          onClick={() => console.log("Navigate to Stripe Dashboard")}
        >
          Stripe
<<<<<<< HEAD
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
=======
>>>>>>> f9b51f6 ("Stripe Widget Component")
        </Button>
      </Stack>
    </Box>
  );
}

export default StripeWidget;
