import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ConnectSection from './ConnectSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';

function HeroSection() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#000',
        color: 'white',
        flexGrow: 1,
        pt: { xs: '0px', sm: '0px' },
      }}
    >
    <Box
      sx={{
        width: '100%',
        height: { xs: '300px', sm: '600px' },
        position: 'relative',
        background: 'url(https://via.placeholder.com/1200x800) center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center', px: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
          Step into Style and Comfort
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
          Discover a wide range of trendy and comfortable shoes that make a statement.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Shop Now
        </Button>
      </Box>
    </Box>
      <Box mt={{ xs: 2, sm: 4, md: 0 }}>
        <FeaturesSection />
      </Box>
      <Box sx={{ bgcolor: 'black', pb: 1 }}>
        <AboutSection />
        <ConnectSection />
      </Box>
    </Box>
  );
}

export default HeroSection;
