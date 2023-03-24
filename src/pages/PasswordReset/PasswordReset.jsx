import { Box, Button, Grid, InputBase, Link, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Logo from '../../assets/ss-logo.svg';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGetNewPasswordClick = () => {
    // Call API to send reset password email
    if (!email) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    setSuccessMsg(`Password reset email sent to ${email}`);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessMsg(null);
    setErrorMsg(null);
  };

  return (
    <Box
      bgcolor="black"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        maxWidth="25rem"
        sx={{ width: "100%", px: 2 }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
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
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" color="white" textAlign="center" fontSize="1.5rem" border="white solid 2px" p={2} sx={{ fontSize: '1.2rem' }}>
Please enter your email address. You will receive an email with instructions on how to reset your password.
</Typography>
</Grid>
<Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', borderRadius: '4px', p: 2, mt: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
<InputBase
placeholder="Email address"
sx={{
borderRadius: '0.2rem',
width: '100%',
background: 'white',
height: '4vh',
padding: '0.5rem',
boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.15)',
mb: 2
}}
value={email}
onChange={handleEmailChange}
/>
<Button
variant="contained"
onClick={handleGetNewPasswordClick}
sx={{
mt: 2,
width: '100%',
background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
color: 'white',
fontWeight: 'bold',
boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, 0.3)',
'&:hover': { background: 'gold' }
}}>
Get New Password
</Button>
<Grid item xs={12}>
<Button
variant="text"
color="primary"
sx={{
mt: 2,
justifyContent: 'flex-start',
width: '100%',
transition: 'transform 0.2s ease-in-out',
'&:hover': {
transform: 'scale(1.1)',
},
}}
>
<Link href="/login
" underline="none" sx={{ textDecoration: 'none', color: 'inherit' }}>
Back to Login
</Link>
</Button>
</Grid>
</Grid>
</Grid>
</Box>
);
}

export default PasswordReset;