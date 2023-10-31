import React, { useState } from "react";
import { Button, Textfield, Box } from "@mui/material";
import { sendPasswordResetEmailToUser } from "../services";

const PasswordResetForm = () => {
  const [email, setEmail] = useState("");
  const [resetRequested, setResetRequested] = useState(false);

  const handleSendResetEmail = async () => {
    try {
      await sendPasswordResetEmailToUser(email);
      setResetRequested(true);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <Textfield
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendResetEmail}
      >
        Send Reset Email
      </Button>
      {resetRequested && (
        <div>Password reset email sent. Check your inbox </div>
      )}
    </div>
  );
};

export default PasswordResetForm;
