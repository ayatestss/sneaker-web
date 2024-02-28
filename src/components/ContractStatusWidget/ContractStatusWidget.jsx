import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContractStatusWidget() {
  const dummyData = {
    contractStatusCounts: {
      notStarted: 9,
      done: 30,
      inProgress: 8,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        width: "40vh",
        margin: "auto",
        fontWeight: "bold",
        bgcolor: "red",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        {dummyData.contractStatusCounts.notStarted}
      </Typography>
      <Typography>Not Started</Typography>

      <Typography variant="h1" component="div" gutterBottom>
        {dummyData.contractStatusCounts.done}
      </Typography>
      <Typography>Done</Typography>

      <Typography variant="h1" component="div" gutterBottom>
        {dummyData.contractStatusCounts.inProgress}
      </Typography>
      <Typography>In Progress</Typography>
    </Box>
  );
}
