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
        height: "100vh",
        width: "100%",
        bgcolor: "background.default",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          height: "auto",
          width: "100%",
          maxWidth: "600px",
          bgcolor: "black",
          color: "white",
          borderRadius: "16px",
          boxShadow: "0px 0px 10px #000",
          border: "4px solid white",
          padding: "20px",
        }}
      >
        <Box sx={{ textAlign: "center", margin: "10px" }}>
          <Typography
            component="div"
            gutterBottom
            sx={{
              fontSize: { xs: "40px", sm: "60px", md: "80px" },
              marginBottom: "0px",
            }}
          >
            {dummyData.contractStatusCounts.notStarted}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
          >
            Not Started
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", margin: "10px" }}>
          <Typography
            component="div"
            gutterBottom
            sx={{
              fontSize: { xs: "40px", sm: "60px", md: "80px" },
              marginBottom: "0px",
            }}
          >
            {dummyData.contractStatusCounts.inProgress}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
          >
            In Progress
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", margin: "10px" }}>
          <Typography
            component="div"
            gutterBottom
            sx={{
              fontSize: { xs: "40px", sm: "60px", md: "80px" },
              marginBottom: "0px",
            }}
          >
            {dummyData.contractStatusCounts.done}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
          >
            Completed
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
