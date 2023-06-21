import { Button, Container, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation } from "@apollo/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLoginWithGoogle, handleLogOut } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(FirebaseAuth, email, password);
      setSuccessMessage("Logged in successfully.");
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
  };

  return (
    <Box
      className="container"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Box
        className="left-section"
        sx={{
          flex: 1,
          minHeight: '100vh',
          backgroundColor: '#282828',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '2rem',
        }}
      >
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 600,
            lineHeight: '100%',
            color: 'white',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Welcome to the best sneaker community online!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            mb: 4,
          }}
        >
          <img
            style={{ width: '80%', height: 'auto', borderRadius: 8, maxWidth: 500 }}
            src={Logo}
            alt="Logo"
          />
        </Box>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            lineHeight: '100%',
            color: 'white',
            mb: 2,
          }}
        >
          Sign in with
        </Typography>
<Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 4,
  }}
>
  {[
    {
      url: 'https://cutewallpaper.org/24/google-logo-png-white/png-file-svg-svg-google-logo-white-clipart-full-size-clipart-3375073--pinclipart.png',
      link: 'https://www.google.com',
    },
    {
      url: 'https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-icon-black-png.png',
      link: 'https://www.facebook.com',
    },
    {
      url: 'https://fontawesomeicons.com/lib/svg/logo-twitter.svg',
      link: 'https://www.twitter.com',
    },
  ].map((item, index) => (
    <IconButton
      key={index}
      sx={{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        mx: 1,
      }}
      component="a"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        style={{ width: 26.02, height: 26.02, borderRadius: 8 }}
        src={item.url}
        alt="social icon"
      />
    </IconButton>
  ))}
</Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            mb: 4,
          }}
        >
          <TextField
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '100%', bgcolor: 'white', mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: '100%', bgcolor: 'white', mb: 2 }}
          />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: 400,
          mb: 2,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: 'white', height: 20, '& > svg': { height: 20 } }}
            />
          }
          label={
            <Typography
              component="div"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '100%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Remember me
            </Typography>
          }
        />
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '100%',
            color: 'white',
            display: 'inline-block',
          }}
          to="/passwordReset"
        >
          Forgot password?
        </Link>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          height: 51,
          backgroundColor: 'white',
          fontSize: 18,
          fontWeight: 600,
          lineHeight: '100%',
          color: 'black',
          mb: 2,
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography
        sx={{ fontSize: 14, fontWeight: 600, lineHeight: '100%', color: 'white', mb: 2 }}
      >
        Not in the society?
        {' '}
        <Link
          to="/registerPage"
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '100%',
            color: 'gold',
            marginBottom: '8px',
            display: 'inline-block',
          }}
        >
          Create an Account
        </Link>
      </Typography>
<Snackbar
  open={error !== null || successMessage !== null}
  autoHideDuration={3000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  action={(key) => (
    <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
      Close
    </Button>
  )}
>
  {error ? (
    <Alert onClose={handleCloseSnackbar} severity="error">
      {error}
    </Alert>
  ) : (
    <Alert onClose={handleCloseSnackbar} severity="success">
      {successMessage}
    </Alert>
  )}
</Snackbar>
    </Box>
  </Box>
      <Box
        className="right-section"
    sx={{
      flex: 1,
      minHeight: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      '@media (max-width: 960px)': {
        display: 'none',
      },
    }}
  >
    <Typography
      sx={{
        fontSize: 48,
        fontWeight: 700,
        lineHeight: '100%',
        color: 'black',
        textAlign: 'center',
        mb: 4,
      }}
    >
      One Stop<br />Shop.
    </Typography>
    <Box sx={{ width: '100%', maxWidth: 600, mb: 4 }}>
      <img
        style={{ width: '100%', height: 'auto' }}
        src="https://via.placeholder.com/559x397"
        alt="sneaker shop"
      />
    </Box>
    <Typography
      sx={{
        fontSize: 20,
        lineHeight: '100%',
        color: 'black',
        textAlign: 'center',
      }}
    >
      For all your Sneaker needs. Business or Personal
    </Typography>
  </Box>
</Box>
);
}


  //   <Grid container sx={{ height: '100vh', bgcolor: 'black' }}>
  //     <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
  //       <Box pb={3} style={{ textAlign: 'center' }}>
  //         <img
  //           src={Logo}
  //           alt="Logo"
  //           sx={{
  //             height: 'auto',
  //             width: '100%',
  //             maxWidth: { xs: '15rem', sm: '25rem' },
  //             objectFit: 'contain',
  //           }}
  //         />
  //       </Box>
  //       <Stack spacing={3} pb={7}>
  //         <InputBase
  //           sx={{
  //             border: 'solid white',
  //             borderRadius: '0.2rem',
  //             width: { xs: '80vw', sm: '30vh' },
  //             height: '5vh',
  //             fontSize: { xs: '1.5vh', sm: '2vh' },
  //             background: 'white',
  //           }}
  //           placeholder="Enter your email address"
  //           required
  //           id="email"
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //         <InputBase
  //           sx={{
  //             border: 'solid white',
  //             borderRadius: '0.2rem',
  //             width: { xs: '80vw', sm: '30vh' },
  //             height: '5vh',
  //             fontSize: { xs: '1.5vh', sm: '2vh' },
  //             background: 'white',
  //           }}
  //           placeholder="Enter your password"
  //           required
  //           id="password"
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <Stack direction="row" justifyContent="center">
  //           <Button variant="contained" onClick={handleLogin}>
  //             Login
  //           </Button>
  //         </Stack>
  //         <Stack direction='row' justifyContent='center' spacing={2}>
  //         <Link
  //           to="/passwordReset"
  //           style={{
  //             textDecoration: 'none',
  //             color: '#FFD700',
  //             fontWeight: 'bold',
  //             textAlign: 'center',
  //             marginTop: '1rem',
  //           }}
  //         >
  //           Forgot Password?
  //         </Link>
  //         <Link
  //           to="/registerPage"
  //           style={{
  //             textDecoration: 'none',
  //             color: '#FFD700',
  //             fontWeight: 'bold',
  //             textAlign: 'center',
  //             marginTop: '1rem',
  //           }}
  //         >
  //           Create an Account
  //         </Link>
  //         </Stack>
  //         <Snackbar
  //           open={error !== null || successMessage !== null}
  //           autoHideDuration={3000}
  //           onClose={handleCloseSnackbar}
  //           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  //           action={(key) => (
  //             <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
  //               Close
  //       </Button>
  //     )}
  //   >
  //     {error ? (
  //       <Alert onClose={handleCloseSnackbar} severity="error">
  //         {error}
  //       </Alert>
  //     ) : (
  //       <Alert onClose={handleCloseSnackbar} severity="success">
  //         {successMessage}
  //       </Alert>
  //     )}
  //   </Snackbar>
  //   </Stack>
  // </Grid>
  //     <Grid
  //       item
  //       xs={12}
  //       sm={6}
  //       sx={{ bgcolor: 'white', display: { xs: 'none', sm: 'block' } }}
  //     >
  //       <Box
  //         display="flex"
  //         alignItems="center"
  //         justifyContent="flex-end"
  //         width="100%"
  //         height="100%"
  //       >
  //         <Typography
  //           style={{
  //             height: '100%',
  //             width: '100%',
  //             maxWidth: '30rem',
  //             maxHeight: '30rem',
  //             objectFit: 'contain',
  //           }}
  //         >
  //           Hello
  //         </Typography>
  //       </Box>
  //   </Grid>
  //   </Grid>