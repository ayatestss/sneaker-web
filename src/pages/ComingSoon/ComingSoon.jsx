import {
  Box,
  Grid,
  Typography,
  InputBase,
  Button,
  Alert,
  Stack,
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
      bgcolor="black"
      minHeight="100%"
      height="auto"
      width="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: { xs: 0, sm: 0 } }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        maxWidth="25rem"
        sx={{ width: "100%" }}
      >
        <Grid item xs={10} pb={3} style={{ textAlign: "center" }}>
          <LogoAnimationDiv>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "25rem",
                objectFit: "contain",
              }}
            />
          </LogoAnimationDiv>
        </Grid>
        <Grid item xs={10} sm={10} md={8} lg={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            fontSize="1.5rem"
            border="white solid 2px"
            p={2}
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            Our mission is to create a platform that will cultivate a community of
            sneakerheads by giving them the power to market their brand and manage
            their business.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            sx={{ fontSize: { xs: "1.4rem", sm: "1.7rem" } }}
          >
            Join the waitlist below
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Stack
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputAnimationDiv>
              <InputBase
                sx={{
                  border: "solid 1px white",
borderRadius: "0.2rem",
width: "30vh",
background: "white",
p: 1,
fontSize: { xs: "0.9rem", sm: "1rem" },
}}
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</InputAnimationDiv>
<InputAnimationDiv>
<InputBase
sx={{
border: "solid 1px white",
borderRadius: "0.2rem",
width: "30vh",
background: "white",
p: 1,
fontSize: { xs: "0.9rem", sm: "1rem" },
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
fontSize: { xs: "0.9rem", sm: "1rem" },
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
</Grid>
<Grid item xs={12}>
<Typography variant="body1" color="white" textAlign="center" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
Already have an account?
<Button
variant="text"
sx={{
color: "#FFD700",
marginLeft: "0.5rem",
fontSize: { xs: "0.9rem", sm: "1rem" },
}}
onClick={() => navigate("/login")}
>
Log In
</Button>
</Typography>
</Grid>
</Grid>
{errorMessage ? (
<Alert severity="error" color="error" sx={{ maxWidth: "80%", marginTop: "1rem", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
{errorMessage}
</Alert>
) : null}
</Box>
);
}


