import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import ConnectSection from './ConnectSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';

function HeroSection() {

  const getTypographyStyles = (isHeader) => {
    return {
      fontSize: {
        xs: isHeader ? '1.2rem' : '1rem',
        sm: isHeader ? '1.5rem' : '1.1rem',
        md: isHeader ? '1.8rem' : '1.2rem',
      },
      fontWeight: isHeader ? 'bold' : 'normal',
    };
  };

  const listItemStyles = {
    fontSize: '0.9rem', // or whatever size you want
    fontWeight: 'normal',
    lineHeight: '1.5',
    color: 'white', // or any other color that suits your design
  };

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
      <Box mt={{ xs: 2, sm: 4 }}>
        <FeaturesSection />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3 }, // Add space between cards, more for larger screens.
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto', // Centers the container if it's below the maximum width.
          mt: 5, // Add space on top for better visual separation.
          mb: 5, // Add space at the bottom as well for symmetry.
        }}
      >
        {/* Basic Plan (Left) */}
        <Card sx={{
          width: { xs: '90%', sm: '28%' },  // Reduced width for mobile for breathing space.
          mx: 'auto',  // Centers the card on mobile since width is less than 100%.
          bgcolor: '#333',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: { xs: 'scale(1.02)', sm: 'scale(1.05)' } // Less aggressive scaling on mobile.
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={getTypographyStyles('h5')}>
              Basic Plan
            </Typography>
            <Typography variant="h4" gutterBottom>
              price/mo
            </Typography>
            <Typography variant="body1" gutterBottom>
              Great for individuals.
            </Typography>
            <ul sx={{ textAlign: 'left', listStyleType: 'none', pl: 0 }}>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
            </ul>
            <Button variant="contained" color="secondary" size="large" mt={3}>
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Premium Plan (Center) */}
        <Card sx={{
          width: { xs: '94%', sm: '34%' },  // Reduced width for mobile for breathing space.
          mx: 'auto',  // Centers the card on mobile since width is less than 100%.
          bgcolor: '#333',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: { xs: 'scale(1.02)', sm: 'scale(1.05)' } // Less aggressive scaling on mobile.
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#ffcc00', ...getTypographyStyles('h4') }}>
              Premium Plan
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: '#ffcc00' }}>
              price/mo
            </Typography>
            <Typography variant="body1" gutterBottom>
              Perfect for professionals.
            </Typography>
            <ul sx={{ textAlign: 'left', listStyleType: 'none', pl: 0 }}>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
            </ul>
            <Button variant="contained" color="secondary" size="large" mt={2}>
              Get Premium
            </Button>
          </CardContent>
        </Card>

        {/* Advanced Plan (Right) */}
        <Card sx={{
          width: { xs: '90%', sm: '28%' },  // Reduced width for mobile for breathing space.
          mx: 'auto',  // Centers the card on mobile since width is less than 100%.
          bgcolor: '#333',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: { xs: 'scale(1.02)', sm: 'scale(1.05)' } // Less aggressive scaling on mobile.
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={getTypographyStyles('h5')}>
              Advanced Plan
            </Typography>
            <Typography variant="h4" gutterBottom>
              price/mo
            </Typography>
            <Typography variant="body1" gutterBottom>
              Suited for small businesses.
            </Typography>
            <ul sx={{ textAlign: 'left', listStyleType: 'none', pl: 0 }}>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
              <li><Typography sx={listItemStyles} fontWeight="bold">- info</Typography></li>
            </ul>
            <Button variant="contained" color="secondary" size="large" mt={2}>
              Choose Advanced
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ bgcolor: 'black', pb: 1, mt: 20 }}>
        <AboutSection />
        <ConnectSection />
      </Box>
    </Box>
  );
}

export default HeroSection;
