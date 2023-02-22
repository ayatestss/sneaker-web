import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

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
    <div>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>

      <Button variant="contained" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
}
