import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@mui/material';

const CallToAction = ({
  buttonText = 'Shop Now',
  headingText = 'Unleash Your Inner Style',
  descriptionText = 'Discover a wide range of trendy and comfortable shoes that make a statement.',
  callToActionStyle = {},
  headingStyle = {},
  descriptionStyle = {},
  buttonStyle = {},
  scrollActivationFraction = 0.9,
}) => {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffset = document.getElementById('callToAction').offsetTop;
      const activationPoint = elementOffset - windowHeight * scrollActivationFraction;

      if (scrollPosition > activationPoint) {
        setAnimationActive(true);
      } else {
        setAnimationActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollActivationFraction]);

  const defaultCallToActionStyle = {
    backgroundColor: '#f50057',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    opacity: animationActive ? 1 : 0,
    transform: animationActive ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    ...callToActionStyle,
  };

  const defaultHeadingStyle = {
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
    ...headingStyle,
  };

  const defaultDescriptionStyle = {
    marginBottom: '32px',
    textAlign: 'center',
    ...descriptionStyle,
  };

  const defaultButtonStyle = {
    color: '#f50057',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: '#f50057',
      color: '#fff',
    },
    ...buttonStyle,
  };

  return (
    <Box id="callToAction" style={defaultCallToActionStyle}>
      <Typography variant="h5" style={defaultHeadingStyle}>
        {headingText}
      </Typography>
      <Typography variant="body1" style={defaultDescriptionStyle}>
        {descriptionText}
      </Typography>
      <Button variant="contained" style={defaultButtonStyle}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default CallToAction;
