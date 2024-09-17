import React from "react";
import { Box, Typography } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

const GET_MEMBER_CONTRACT_STATUS = gql`
  query GetMemberContractStatus {
    memberContractStatus {
      finished
      notStarted
      started
    }
  }
`;

export default function ContractStatusWidget() {
  const { data, loading, error } = useQuery(GET_MEMBER_CONTRACT_STATUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        bgcolor: "background.default",
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
            {data.memberContractStatus.notStarted}
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
            {data.memberContractStatus.started}
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
            {data.memberContractStatus.finished}
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
