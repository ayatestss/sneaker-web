import { Button } from "@mui/material";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("pass");

  const data = { email, password };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
    alert(data);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}
