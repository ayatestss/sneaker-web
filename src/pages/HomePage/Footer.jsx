import React, { useEffect } from 'react';
import { Typography, Box, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const TwitterFeed = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div>
      <div className="twitter-embed" style={{
        height: '400px', // from data-height attribute
        width: '100%', // use 100% width so it scales with screen size
        overflow: 'auto',
        borderRadius: '15px', // rounded borders
        boxShadow: '0px 10px 18px -2px rgba(0,0,0,0.25)', // shadow effect
        marginBottom: '15px', // space between Twitter embed and social media icons
      }}>
        <a className="twitter-timeline"
           href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw"
           data-theme="dark"
           style={{ color: 'white' }}>
          Tweets by elonmusk
        </a>
      </div>
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
    </div>
  );
}

function Footer() {
  return (
    <Box sx={{ bgcolor: '#333', color: 'white', py: 2, px: 2 }}>
      <Grid container justifyContent="space-between" alignItems="flex-start" spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <TwitterFeed />
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6">Products</Typography>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>Sneakers</Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>Boots</Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>Sandals</Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6">Useful Links</Typography>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>About Us</Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>FAQs</Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>Contact</Link>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6">Contact</Typography>
          <Typography sx={{ display: 'block' }}>Phone: (123) 456-7890</Typography>
          <Typography sx={{ display: 'block' }}>Email: info@shoecompany.com</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
        Copyright © 2023 Shoe Company
      </Typography>
    </Box>
  );
}

export default Footer;
