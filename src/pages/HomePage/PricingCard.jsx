import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function PricingCard({ title, price, description, benefits, buttonText }) {
    return (
        <Box
            sx={{
                mx: 'auto',
                bgcolor: 'background.paper',
                color: 'text.primary',
                border: '1px solid white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
            }}
        >
            <Box sx={{ p: 0, position: 'relative', textAlign: 'center' }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '36px',
                        fontWeight: '400',
                        lineHeight: '44px',
                        letterSpacing: '0em',
                        color: '#FFFFFF',
                        marginTop: '20px',
                    }}
                >
                    Monthly
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                }}>
                    <Typography variant="h3" sx={{
                        fontSize: { xs: '48px', sm: '96px' },
                        fontWeight: '700',
                        lineHeight: '1',
                        color: '#FFD700',
                    }}>
                        $7.99
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '16px', sm: '24px' },
                        fontWeight: '700',
                        lineHeight: '1',
                        color: '#FFD700',

                    }}>
                        /mo
                    </Typography>
                </Box>
                <Box sx={{ display: 'inline-block', textAlign: 'left', margin: 'auto', paddingTop: '15px' }}>
                    <ul style={{
                        listStyleType: 'disc',
                        paddingLeft: '20px',
                        margin: 0,
                    }}>
                        {benefits.map((benefit, index) => (
                            <li key={index} style={{
                                fontSize: { xs: '18px', sm: '24px' },
                                fontWeight: '700',
                                lineHeight: '45px',
                                color: '#FFFFFF',
                                marginTop: { xs: '10px', sm: '12px' },
                                marginBottom: { xs: '10px', sm: '12px' },
                            }}>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: { xs: '18px', sm: '24px' },
                                        fontWeight: '700',
                                        fontStyle: 'normal',
                                        lineHeight: '45px',
                                        letterSpacing: '0em',
                                    }}
                                >
                                    {benefit}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>
            <Button
                variant="outlined"
                sx={{

                    color: 'white',
                    fontSize: '24px',
                    borderColor: 'white',
                    borderWidth: 1,
                    padding: '10px 25px',
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
                    mx: 'auto',
                    marginBottom: '50px',
                    display: 'block',
                    width: 'fit-content'
                }}
            >
                {buttonText}
            </Button>
        </Box>
    );
}

export default PricingCard;