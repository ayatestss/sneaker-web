import React from 'react';
import { Typography, Box, Grid, Button, Container, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
  <Box sx={{ bgcolor: '#333', color: 'white', py: 2 }}>
<Container>
<Grid container justifyContent="space-between" alignItems="center">
<Grid item xs={12} sm={4}>
<Typography align="center" variant="body2" color="inherit">
Copyright © 2023 Shoe Company
</Typography>
</Grid>
<Grid item xs={12} sm={4}>
<Typography align="center" variant="body2" color="inherit">
Phone: (123) 456-7890
</Typography>
</Grid>
<Grid item xs={12} sm={4}>
<Typography align="center" variant="body2" color="inherit">
Email: info@shoecompany.com
</Typography>
</Grid>
<Grid item xs={12} sm={12} mt={2}>
<Box display="flex" justifyContent="center">
<IconButton color="inherit" component={Link} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
<Facebook />
</IconButton>
<IconButton color="inherit" component={Link} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
<Twitter />
</IconButton>
<IconButton color="inherit" component={Link} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
<Instagram />
</IconButton>
<IconButton color="inherit" component={Link} href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
<LinkedIn />
</IconButton>
</Box>
</Grid>
</Grid>
</Container>
</Box>
  );
}

export default Footer;