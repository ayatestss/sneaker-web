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
                height: 'calc(100vh - 100px)', // Height adjusted for header
                backgroundColor: '#000', // Black background
                color: 'white',
                textAlign: 'center',
                padding: '0 20px', // Horizontal padding
            }}
        >
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontWeight: '700', // Bold font weight
                    fontSize: { lg: '96px', xs: '2.5rem', md: '4rem' }, // Responsive font size
                    marginBottom: '32px', // Space below the title
                }}
            >

                <TypeAnimation
                    sequence={[
                        'Elevate your Collection', 1000, // Display "Elevate your Collection" for 1 second
                        'Streamline your Process', 1000,  // Display "Streamline your Process" for 1 second
                        'Build your Brand', 1000,         // Display "Build your Brand" for 1 second
                    ]}
                    speed={50}    // Speed of typing
                    repeat={Infinity} // Repeat the animation indefinitely
                />
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: '400', // Regular font weight
                    fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
                    maxWidth: '800px', // Max width for readability
                    marginBottom: '48px', // Space below the subtitle
                    fontSize: '24px',
                }}
            >
                Your all-in-one solution: Where restoration experts elevate their brand
                while customers easily find top-tier restoration services.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '70px',
                    alignItems: 'center',
                    marginBottom: '60px', // Space below the buttons
                }}
            >
                <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', padding: '10px 24px', fontSize: '24px' }}>
                    Business
                </Button>
                <Box
                    sx={{
                        height: '90px', // Increased height of the vertical line
                        width: '1px', // Width of the vertical line
                        bgcolor: 'white', // Color of the vertical line
                        alignSelf: 'center' // Aligns the line vertically with the buttons
                    }}
                />
                <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', padding: '10px 24px', fontSize: '24px' }}>
                    Customer
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'fit-content', // Set width to fit the content
                    height: 'fit-content', // Set height to fit the content
                    cursor: 'pointer',
                }}
                onClick={scrollToNext} // Add onClick handler
            >
                <ExpandMoreIcon sx={{ fontSize: '4rem' }} /> {/* Adjust the icon size as needed */}
            </Box>
        </Box>
    );
}

export default MainSection;
