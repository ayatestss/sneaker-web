import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TypeAnimation } from 'react-type-animation';

function MainSection({ scrollToNext }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        pt: { xs: '100px', md: 0 },
      }}
    >
      {/* <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: '700',
          fontSize: { lg: '96px', md: '4rem', sm: '3rem', xs: '3rem' },
          marginTop: { xs: '20px', md: '0' },
          marginBottom: '32px',
          wordWrap: 'break-word',
          lineHeight: { xs: 1.2, sm: 1.3 },
        }}
      >
        <TypeAnimation
          sequence={[
            'Elevate your Collection',
            1000,
            'Streamline your Process',
            1000,
            'Build your Brand',
            1000,
          ]}
          speed={50}
          wrapper="div"
          repeat={Infinity}
        />
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: '400',
          fontSize: { xs: '16px', md: '1.25rem' },
          maxWidth: '800px',
          marginBottom: '48px',
        }}
      >
        Your all-in-one solution: Where restoration experts elevate their brand
        while customers easily find top-tier restoration services.
      </Typography> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          background: 'purple',
        }}
      >
        <Button variant="outlined">Business</Button>
        <Button variant="outlined">Customer</Button>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        sx={{
          cursor: 'pointer',
          backgroundColor: 'green',
        }}
        onClick={scrollToNext}
      >
        <ExpandMoreIcon sx={{ fontSize: '2rem' }} />
      </Box>
    </Box>
  );
}

export default MainSection;
