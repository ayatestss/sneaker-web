import React, { useEffect, useState } from 'react';
import { Drawer, IconButton, AppBar, Toolbar, Box, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: 'HomePage', title: 'Home Page', path: '/HomePage' },
  { id: 'Contact', title: 'Contact', path: '/contact' },
]

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPositions = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          return element ? { id: section.id, position: element.offsetTop } : null;
        })
        .filter((item) => item !== null);

      if (sectionPositions.length > 0) {
        const targetSection = sectionPositions.reduce((prev, curr) =>
          scrollPosition >= curr.position ? curr : prev,
          sectionPositions[0]  // Providing initial value
        );

        setActiveSection(targetSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <Drawer
      anchor="right"
      open={sidebarOpen}
      onClose={toggleSidebar}
      PaperProps={{
        sx: {
          backgroundColor: 'black',
          width: 250,
          '@media (max-width: 600px)': {
            width: '100%',
            height: '50%',
          },
        },
      }}
      SlideProps={{
        direction: isSmallScreen ? 'down' : 'left',
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: 250,
          backgroundColor: 'yellow',
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'flex-end',
            paddingRight: '8px',
          }}
        >
          <IconButton onClick={toggleSidebar} color="inherit">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: 250,
          overflow: 'auto',
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
        role="presentation"
      >
        <List>
          {sections.map((section) => (
            <ListItem
              key={section.id}
              button
              component={Link}
              to={section.path}
              onClick={toggleSidebar}
              selected={activeSection === section.id}
              sx={{
                position: 'relative',
                '& .MuiListItemText-primary': {
                  color: 'white',
                },
                '&:hover .MuiListItemText-primary::after': {
                  width: '100%',
                },
                '& .MuiListItemText-primary::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width:
                    activeSection === section.id && (section.id !== 'section1' || window.scrollY > 0)
                      ? '100%'
                      : '0%',
                  borderBottom: '2px solid white',
                  transition: 'width 0.3s',
                },
              }}
            >
              <ListItemText primary={section.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
