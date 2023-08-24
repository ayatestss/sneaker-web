import React from 'react';
import { Box, Grid } from '@mui/material';
import ConnectSection from './ConnectSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import PricingCard from './PricingCard';

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
      <Box mt={{ xs: 2, sm: 4 }}>
        <FeaturesSection />
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 5, mb: 5, px: 2 }}>
        <Grid item xs={12} sm={4}>
          <PricingCard
            title="Basic Plan"
            price="price/mo"
            description="Great for individuals."
            benefits={['info', 'info', 'info', 'info']}
            buttonText="Get Started"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PricingCard
            title="Premium Plan"
            price="price/mo"
            description="Perfect for professionals."
            benefits={['info', 'info', 'info', 'info', 'info']}
            buttonText="Get Premium"
            highlight={true}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PricingCard
            title="Advanced Plan"
            price="price/mo"
            description="Suited for small businesses."
            benefits={['info', 'info', 'info', 'info', 'info']}
            buttonText="Choose Advanced"
          />
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: 'black', pb: 1, mt: 20 }}>
        <AboutSection />
        <ConnectSection />
      </Box>
    </Box>
  );
}

export default HeroSection;