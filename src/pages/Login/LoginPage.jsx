import { Button } from "@mui/material";

import React, { useState } from "react";

import { singInWithGoogle } from "../../auth/services";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      singInWithGoogle();
      // await signInWithPopup(auth, GoogleAuthProvider);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }

    // // creat a user test
    // console.log(data);
    // alert(data);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}
