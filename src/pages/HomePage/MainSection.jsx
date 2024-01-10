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
                backgroundColor: '#000',
                color: 'white',
                textAlign: 'center',
                padding: '0 20px',
                pt: { xs: '100px', md: 0 }, 
            }}
        >
            <Typography
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
                        'Elevate your Collection', 1000,
                        'Streamline your Process', 1000,
                        'Build your Brand', 1000,
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
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: '20px', md: '70px' }, 
                    alignItems: 'center',
                    justifyContent: 'center', 
                    marginBottom: '60px',
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        color: 'white',
                        fontSize: '24px',
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: '5px',
                        padding: '5px 30px',
                        position: 'relative',
                        overflow: 'hidden',
                        width: { xs: '100%', sm: 'auto' },
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            backgroundColor: 'yellow',
                            zIndex: 0,
                        },
                        '&:before': {
                            width: '100%',
                            height: '2px',
                            bottom: 0,
                            left: 0,
                        },
                        '&:after': {
                            width: '2px',
                            height: '100%',
                            top: 0,
                            right: 0,
                        },
                        mb: { xs: 1, md: 0 }, 
                    }}
                >
                    Business
                </Button>
                <Box
                    sx={{
                        height: { xs: '2px', md: '90px' }, 
                        width: { xs: '80%', md: '1px' },
                        bgcolor: 'white',
                        alignSelf: 'center',
                        my: { xs: 1, md: 0 },
                    }}
                />
                <Button
                    variant="outlined"
                    sx={{
                        color: 'white',
                        fontSize: '24px',
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: '5px',
                        padding: '5px 30px',
                        position: 'relative',
                        overflow: 'hidden',
                        width: { xs: '100%', sm: 'auto' },
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            backgroundColor: 'yellow',
                            zIndex: 0,
                        },
                        '&:before': {
                            width: '100%',
                            height: '2px',
                            bottom: 0,
                            left: 0,
                        },
                        '&:after': {
                            width: '2px',
                            height: '100%',
                            top: 0,
                            right: 0,
                        },
                    }}
                >
                    Customer
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'fit-content',
                    height: 'fit-content',
                    cursor: 'pointer',
                }}
                onClick={scrollToNext}
            >
                <ExpandMoreIcon sx={{ fontSize: '4rem', paddingRight:'15px' }} />
            </Box>
        </Box>
    );
}

export default MainSection;
