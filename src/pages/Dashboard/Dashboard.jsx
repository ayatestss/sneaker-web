import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

export const Dashboard = () => {
  const WidgetPlaceholder = ({ color, height }) => (
    <div
      style={{
        backgroundColor: color,
        height: height,
        marginBottom: '8px',
      }}
    >
      {/* Widget 1 content */}
    </div>
  );
  return (
    <Container maxWidth="lg" style={{ height: '100vh' }}>
      <Typography variant="h1" fontWeight="bold">
        Welcome Kyle
      </Typography>

      <Grid container spacing={2} style={{ height: '100%' }}>
        {/* Header */}
        {/* Left side widget */}
        <Grid item xs={12} md={6}>
          <div style={{ backgroundColor: 'lightblue', height: '100%' }}>
            {/* Widget content */}
          </div>
        </Grid>

        {/* Right side widgets */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              //   backgroundColor: 'green',
            }}
          >
            <WidgetPlaceholder color="lightgreen" height="100%" />
            <WidgetPlaceholder color="lightpink" height="100%" />
            <WidgetPlaceholder color="lightyellow" height="100%" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
