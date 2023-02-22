import { Box, Stack, Typography, InputBase, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Logo from "../../assets/ss-logo.svg";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fadeInFirst = keyframes`
0% {
//   transform: rotate(-22deg);
opacity: 0;
}
100% {
    // transform: rotate(40deg);
opacity: 1;
}
`;

  const fadeInSecond = keyframes`

0%,50% {
//   transform: rotate(-22deg);
opacity: 0;
}
100% {
    // transform: rotate(40deg);
opacity: 1;
} 
`;
  const LogoAnimationDiv = styled("div")({
    animation: `${fadeInFirst} 1.5s ease-in`,
  });

  const InputAnimationDiv = styled("div")({
    animation: `${fadeInSecond} 2s ease-in-out`,
  });

  const handleEmailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <Box sx={{ background: "black", height: "100vh" }}>
      <Stack alignItems="center" spacing={3} pb={7} width="auto">
        <img src={Logo} style={{ height: "30vh", width: "auto" }} />
        <Typography
          variant="h4"
          fontStyle="italic"
          color="white"
          textAlign="center"
          width="38vh"
          fontSize="2.6vh"
        >
          Our mission is to create a platform that will cultivate a community of
          sneakerheads by giving them the power to market their brand and manage
          their business.
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="white"
          textAlign="center"
          fontSize="1.7rem"
        >
          Join the waitlist below
        </Typography>

        <Box sx={{ display: "flex", width: "auto", height: "auto" }}>
          <InputBase
            style={{
              border: "solid white",
              borderRadius: "0.2rem",
              width: "25vh",
              fontSize: "2vh",
              background: "white",
            }}
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            style={{
              background: "#FFD700",
              border: "none",
              borderRadius: "0.3rem",
              marginLeft: "0.5rem",
              color: "white",
            }}
            onClick={() => console.log(email)}
          >
            Sign Up
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
