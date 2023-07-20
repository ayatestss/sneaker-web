import React, { useState } from "react";
import { Box, Button, TextField, InputLabel } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const MemberSettingsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
  };

  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBackClick = () => {
    history.push("/MemberSettings");
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr)"
          sx={{
            "&  > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Box display="flex" gap="30px" flexDirection="row">
            <TextField
              fullWidth
              id="firstName"
              value={firstName}
              label="First Name"
              onChange={handleFirstNameChange}
              variant="filled"
            />
            <TextField
              fullWidth
              id="lastName"
              value={lastName}
              label="Last Name"
              onChange={handleLastNameChange}
              variant="filled"
            />
          </Box>
          <Box display="flex" gap="30px" flexDirection="row">
            <TextField
              fullWidth
              id="email"
              value={email}
              label="Email"
              onChange={handleEmailChange}
              variant="filled"
            />
            <TextField
              fullWidth
              id="phone"
              value={phone}
              label="Phone"
              onChange={handlePhoneChange}
              variant="filled"
            />
          </Box>
          <InputLabel htmlFor="Address 1">Address 1</InputLabel>
          <TextField
            fullWidth
            id="address-1"
            value={address1}
            label="Address 1"
            onChange={handleAddress1Change}
            variant="filled"
          />
          <InputLabel htmlFor="Address 2">Address 2</InputLabel>
          <TextField
            fullWidth
            id="address-2"
            value={address2}
            label="Address 2"
            onChange={handleAddress2Change}
            variant="filled"
          />
          <Button variant="contained" onClick={handleBackClick}>
            Back
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default MemberSettingsForm;
