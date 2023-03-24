import {
  Box,
  Stack,
  Typography,
  InputBase,
  Button,
  Alert,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Logo from "../../assets/ss-logo.svg";
import { useState } from "react";
import { CREATE_EMAIL } from "../ComingSoon/graphql/addEmail";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

export default function ComingSoon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createEmail, { data, loading }] = useMutation(CREATE_EMAIL);

  const fadeInFirst = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const fadeInSecond = keyframes`
    0%, 50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    } 
  `;

  const LogoAnimationDiv = styled("div")({
    animation: `${fadeInFirst} 1.5s ease-in`,
  });

  const InputAnimationDiv = styled("div")({
    animation: `${fadeInSecond} 2s ease-in-out`,
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        maxHeight: "100%",
        bgcolor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 1, sm: 2, md: 4 },
      }}
    >
      <Stack alignItems="center" spacing={2} width="auto" mt={1} sx={{ maxHeight: "85vh" }}>
        <LogoAnimationDiv>
          <img src={Logo} sx={{ height: "30%", width: "100%" }} />
        </LogoAnimationDiv>
        <Typography
          variant="h4"
          fontStyle="italic"
          color="white"
          textAlign="center"
          width={{ xs: "100%", sm: "38vh" }}
          fontSize={{ xs: "2.6vh", sm: "2.6vh" }}
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
          fontSize={{ xs: "1.7rem", sm: "1.7rem" }}
        >
          Join the waitlist below
        </Typography>

        <Stack
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputAnimationDiv>
            <InputBase
              sx={{
                border: "solid white",
                borderRadius: "0.2rem",
                minWidth: "25vh",
                width: "100%",
                background: "white",
                p: 1,
              }}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </InputAnimationDiv>
          <InputAnimationDiv>
<InputBase
sx={{
border: "solid white",
borderRadius: "0.2rem",
minWidth: "25vh",
width: "100%",
background: "white",
p: 1,
}}
placeholder="Enter your email address"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</InputAnimationDiv>
<Button
sx={{
background: "#FFD700",
border: "none",
borderRadius: "0.3rem",
color: "black",
}}
onClick={async () => {
try {
await createEmail({
variables: {
data: {
email: email,
name: name,
},
},
});
console.log({ email, name });
navigate("/confirmationPage");
} catch (e) {
console.log(e);
setErrorMessage(e.message);
}
}}
>
Sign Up
</Button>
</Stack>
<Typography variant="body1" color="white" mt={1}>
Already have an account?
<Button
variant="text"
sx={{
color: "#FFD700",
marginLeft: "0.5rem",
}}
onClick={() => navigate("/login")}
>
Log In
</Button>
</Typography>
</Stack>
{errorMessage ? (
<Alert severity="error" color="error">
{errorMessage}
</Alert>
) : null}
</Box>
);
}
