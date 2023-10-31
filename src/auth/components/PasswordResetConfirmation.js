import React, { useState } from "react";
import { Button, Textfield, Box } from "@mui/material";
import { confirmPasswordResetWithCode } from "../services";

const PasswordResetConfirmation = () => {
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleConfirmReset = async () => {
    try {
      await confirmPasswordResetWithCode(resetCode, newPassword);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <Textfield
        label="Reset Code"
        variant="outlined"
        value={resetCode}
        onChange={(e) => setResetCode(e.target.value)}
      />
      <Textfield
        label="New Password"
        type="password"
        variant="outlined"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleConfirmReset}>
        Confirm Reset
      </Button>
    </div>
  );
};

export default PasswordResetConfirmation;
