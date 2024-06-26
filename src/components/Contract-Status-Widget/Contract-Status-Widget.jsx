import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContractStatusWidget() {
  const dummyData = {
    contractStatusCounts: {
      notStarted: 8,
      done: 30,
      inProgress: 14,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height to center vertically
        width: "100%", // Full width
        bgcolor: "background.default", // Background color of the page
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Align items horizontally
          justifyContent: "space-around", // Space items evenly
          alignItems: "center",
          height: "250px", // Height of the widget
          width: "50%", // Width of the widget
          maxWidth: "600px", // Maximum width
          bgcolor: "black", // Background color of the widget
          color: "white", // Text color
          borderRadius: "16px", // Rounded corners
          boxShadow: "0px 0px 10px #000", // Shadow effect
          border: "2px solid white", // White border
          padding: "16px", // Padding inside the box
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography component="div" sx={{ fontSize: "60px" }}>
            {dummyData.contractStatusCounts.notStarted}
          </Typography>
          <Typography variant="h3">Not Started</Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography component="div" sx={{ fontSize: "60px" }}>
            {dummyData.contractStatusCounts.done}
          </Typography>
          <Typography variant="h3">Done</Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography component="div" sx={{ fontSize: "60px" }}>
            {dummyData.contractStatusCounts.inProgress}
          </Typography>
          <Typography variant="h3">In Progress</Typography>
        </Box>
      </Box>
    </Box>
  );
}
