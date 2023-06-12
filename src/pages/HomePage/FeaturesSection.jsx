import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box, Grid, Button, Container } from '@mui/material';

function FeaturesSection() {
  const features = [
    {
      title: 'Feature 1',
      description: 'Feature 1 description.',
      icon: 'https://via.placeholder.com/64', // Replace with your icon URL
    },
    {
      title: 'Feature 2',
      description: 'Feature 2 description.',
      icon: 'https://via.placeholder.com/64', // Replace with your icon URL
    },
    {
      title: 'Feature 3',
      description: 'Feature 3 description.',
      icon: 'https://via.placeholder.com/64', // Replace with your icon URL
    },
    {
      title: 'Feature 4',
      description: 'Feature 4 description.',
      icon: 'https://via.placeholder.com/64', // Replace with your icon URL
    },
    {
      title: 'Feature 5',
      description: 'Feature 5 description.',
      icon: 'https://via.placeholder.com/64', // Replace with your icon URL
    },
    {
      title: 'Feature 6',
      description: 'Feature 6 description.',
      icon: 'https://via.placeholder.com/64', // Replace with your icon URL
    },
    // Add more features as needed
  ];

  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted]);

  return (
    <Box sx={{ backgroundColor: '#000', color: 'white', pt: 2, pb: 8 }} ref={sectionRef}>
      <Container>
        <Box my={8} sx={{ textAlign: 'center', paddingBottom: '2rem' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Features
          </Typography>
          <Typography variant="body1" gutterBottom>
            Discover the amazing features we offer.
          </Typography>
          <Grid container justifyContent="space-evenly" spacing={3} mt={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'grey',
                    borderRadius: '4px',
                    p: 2,
                    position: 'relative',
                    boxShadow: 1,
                    transform: animationStarted ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.5s ease',
                    transitionDelay: `${index * 0.2}s`,
                  }}
                >
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                     borderRadius: '50%',
bgcolor: 'white',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
marginBottom: '1rem',
}}
>
<img
src={feature.icon}
alt={feature.title}
style={{ width: '60%', height: '60%', objectFit: 'contain' }}
/>
</Box>
<Box
sx={{
flex: '1 1 auto',
textAlign: 'center',
}}
>
<Typography variant="h6" fontWeight="bold" gutterBottom>
{feature.title}
</Typography>
<Typography variant="body2" color="text.secondary">
{feature.description}
</Typography>
</Box>
</Box>
</Grid>
))}
</Grid>
</Box>
</Container>
</Box>
);
}

export default FeaturesSection;
