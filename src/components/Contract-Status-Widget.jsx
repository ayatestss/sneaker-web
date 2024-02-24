import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Box, Typography } from "@mui/material";

const GET_CONTRACT_STATUS_COUNTS = gql`
  query GetContractStatusCounts {
    contractStatusCounts {
      notStarted
      inProgress
      done
    }
  }
`;

export default function ContractStatusWidget() {
  const { loading, error, data } = useQuery(GET_CONTRACT_STATUS_COUNTS);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error</p>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 3,
        bgcolor: "background.paper",
      }}
    >
      <Box>
        <Typography variant="h5">
          {data.contractStatusCounts.notStarted}
        </Typography>
        <Typography>Not Started</Typography>
      </Box>
      <Box>
        <Typography variant="h5">{data.contractStatusCounts.done}</Typography>
        <Typography>Done</Typography>
      </Box>
      <Box>
        <Typography variant="h5">
          {data.contractStatusCounts.inProgress}
        </Typography>
        <Typography>In Progress</Typography>
      </Box>
    </Box>
  );
}
