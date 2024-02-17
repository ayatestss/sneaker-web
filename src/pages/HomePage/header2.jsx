import Sneakers from '../../../assets/sneakers-header.png';
import React from 'react';
import { AppBar, Toolbar, Box, Button, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import StyledButton from './StackedButton';
import { MenuBookOutlined } from '@mui/icons-material';

const sections = [
  { id: 'Features', title: 'Features', path: '/features' },
  { id: 'Pricing', title: 'Pricing', path: '/pricing' },
  { id: 'Contact', title: 'Contact', path: '/contact' },
  { id: 'Support', title: 'Support', path: '/support' },
];

function Header() {
  const isMobile = useMediaQuery('(max-width: 959px)');

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={1}
      sx={{ zIndex: 9999, backgroundColor: 'black', padding: '0 50px' }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: isMobile ? '120px' : '100px',
          padding: isMobile ? '10px 20px' : '0 50px',
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start',
            width: '100%',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Sneakers}
              alt="sneaker-society"
              style={{ height: '100px', objectFit: 'contain' }}
            />
          </Link>
        </Box>

        {/* Navigation links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                component={Link}
                to={section.path}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontWeight: '700',
                  fontSize: '24px',
                }}
              >
                {section.title}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          // <IconButton
          //   edge="end"
          //   color="inherit"
          //   aria-label="menu"
          //   onClick={toggleSidebar}
          //   sx={{ ml: 'auto' }}
          // >
          <Menu />
          // </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
