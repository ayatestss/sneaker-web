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
          height: "150px", // Height of the widget
          width: "80%", // Width of the widget
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
          <Typography variant="h3" component="div" gutterBottom>
            {dummyData.contractStatusCounts.notStarted}
          </Typography>
          <Typography variant="subtitle1">Not Started</Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="div" gutterBottom>
            {dummyData.contractStatusCounts.done}
          </Typography>
          <Typography variant="subtitle1">Done</Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="div" gutterBottom>
            {dummyData.contractStatusCounts.inProgress}
          </Typography>
          <Typography variant="subtitle1">In Progress</Typography>
        </Box>
      </Box>
    </Box>
  );
}
