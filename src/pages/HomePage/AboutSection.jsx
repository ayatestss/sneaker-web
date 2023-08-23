import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';

const AboutSection = () => {
  const theme = useTheme();

  const [animationActive, setAnimationActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setIsScrollingUp(currentScrollY < prevScrollY);
      prevScrollY = currentScrollY;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffset = document.getElementById('aboutSection').offsetTop;
      const activationPoint = elementOffset - windowHeight * 0.9;
      const deactivationPoint = elementOffset + windowHeight * 0.5;

      if (scrollPosition > activationPoint && scrollPosition < deactivationPoint) {
        setAnimationActive(true);
      } else if (scrollPosition >= deactivationPoint) {
        setAnimationActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aboutSectionStyle = {
    transform: animationActive ? 'translateX(0)' : isScrollingUp ? 'translateX(100%)' : 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out',
    opacity: animationActive ? 1 : 0,
  };

  return (
    <Box my={8} sx={{ textAlign: 'center' }}>
      <Box id="aboutSection" style={{ ...aboutSectionStyle }}>
        <Container>
          <Grid container justifyContent="space-around" spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }, lineHeight: 1.4 }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, lineHeight: 1.6 }}
              >
                We are a leading shoe company providing the best footwear for all occasions. Our mission is to deliver exceptional quality and comfort to our customers.
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="secondary" size="large">
                  Read Our Story
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ width: '100%', overflow: 'hidden', paddingTop: '50%', position: 'relative', borderRadius: '4px' }}>
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="About Us Image"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutSection;
