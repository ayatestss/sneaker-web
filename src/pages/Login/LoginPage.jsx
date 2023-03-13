import { Button, InputBase, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation } from "@apollo/client";
import { Box, margin, Stack} from "@mui/system";
import Logo from "../../assets/ss-logo.svg"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLoginWithGoogle, handleLogOut } = useContext(AuthContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      handleLoginWithGoogle();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      bgcolor="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={2} pb={3}>
        <img src={Logo} style={{ height: "auto", width: "auto" }} />
      </Stack>
      <Stack spacing={2} pb={7}>
        <InputBase
          style={{
            border: "solid white",
            borderRadius: "0.2rem",
            width: "25vh",
            fontSize: "2vh",
            background: "white",
          }}
          placeholder="Enter your email address"
          required
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBase
          style={{
            border: "solid white",
            borderRadius: "0.2rem",
            width: "25vh",
            fontSize: "2vh",
            background: "white",
          }}
          placeholder="Enter your password"
          required
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{display: 'flex', alignSelf: 'center' }}>
          <div>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          </div>
          <div style={{paddingLeft: '0.8rem'}}>
          <Button variant="contained" onClick={handleLogOut}>
            Logout
          </Button>
          </div>
        </div>
      </Stack>
      </Box>
  );
}
