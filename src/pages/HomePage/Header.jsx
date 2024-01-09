import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Sneakers from '../../../assets/sneakers-header.png';

const sections = [
  { id: 'HomePage', title: 'Home Page', path: '/homePage' },
  { id: 'Pricing', title: 'Pricing', path: '/pricing' },
  { id: 'Contact', title: 'Contact', path: '/contact' },
  { id: 'Support', title: 'Support', path: '/support' },
];

function Header({ toggleSidebar }) {
  const isMobile = useMediaQuery('(max-width: 959px)');

  return (
    <AppBar position="sticky" color="primary" elevation={1} sx={{ zIndex: 2000, backgroundColor: '#000', padding: '0 50px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>

        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Sneakers} alt="sneaker-society" style={{ width: '134px', height: '104.09px' }} />
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation links and Login button for non-mobile */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                component={Link}
                to={section.path}
                sx={{ color: 'white', textDecoration: 'none', mx: 2, fontWeight: '700', fontSize: '24px' }}
              >
                {section.title}
              </Button>
            ))}

            {/* Login button styled like the design */}
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
              component={Link}
              to="/login"
            >
              Login
            </Button>
          </Box>
        )}

        {/* Menu icon for mobile */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}

      </Toolbar>
    </AppBar>
  );
}

export default Header;
