import React from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Box, Divider, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import ExploreIcon from '@mui/icons-material/Explore';
import { TbShoe } from "react-icons/tb";
import { CiVault } from "react-icons/ci";
import { Link } from 'react-router-dom';

const sections = [
    { title: 'My Society', path: '/my-society', Icon: TbShoe },
    { title: 'Discover', path: '/discover', Icon: ExploreIcon },
    { title: 'Groups', path: '/groups', Icon: GroupsIcon },
    { title: 'The Vault', path: '/vault', Icon: CiVault },
    { title: 'Messages', path: '/messages', Icon: MessageIcon },
    // Additional sections can be added here...
];

const NewSidebar = ({ sidebarOpen, toggleSidebar }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const iconColor = isMobile ? 'black' : 'white'; // Set icon and text color based on device type

    return (
        <>
            {isMobile && (
                <IconButton
                    onClick={toggleSidebar}
                    color="inherit"
                    sx={{
                        position: 'fixed',
                        top: 8,
                        right: 8,
                        zIndex: 1300,
                        display: 'block',
                        color: sidebarOpen ? 'black' : 'white', // Adjust menu button color based on sidebar state
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                anchor="left"
                open={sidebarOpen || !isMobile}
                onClose={toggleSidebar}
                PaperProps={{
                    sx: {
                        width: isMobile ? '100vw' : 240,
                        height: '100vh',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'fixed',
                        zIndex: 1200,
                        backgroundColor: isMobile ? 'white' : 'black', // Background color changes based on device type
                        color: iconColor, // Text color inherited by children

                    },
                }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={2}
                    sx={{
                        background: 'black',
                        borderRadius: '50%',
                        width: 200, // Set width to match the image
                        height: 200,
                        marginTop: '96px', // Increased value to push the logo further down
                        alignSelf: 'center',
                    }}
                >
                    <img
                        alt="Sneaker Society Logo"
                        src={`../../assets/SNEAKER SOCIETY (Transparency).png`}
                        style={{ width: 200, height: 200 }}
                    />
                </Box>
                <Box
                    role="presentation"
                    onClick={toggleSidebar}
                    onKeyDown={toggleSidebar}
                    sx={{
                        flexGrow: 1,
                        paddingTop: 5,
                    }}
                >
                    <List>
                        {sections.map((section, index) => (
                            <ListItem
                                button
                                key={index}
                                component={Link}
                                to={section.path}
                                sx={{
                                    justifyContent: 'center',
                                    py: 1,
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px', color: iconColor }}>
                                    {React.createElement(section.Icon, { style: { color: iconColor } })} 
                                </ListItemIcon>
                                <ListItemText primary={section.title} sx={{ textAlign: 'center', flex: 'none', color: iconColor }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider />
                <Box
                    sx={{
                        pb: 2,
                    }}
                >
                    <List>
                        <ListItem
                            button
                            component={Link}
                            to="/settings"
                            sx={{
                                justifyContent: 'center',
                                py: 1,
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px', color: iconColor }}>
                                <SettingsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" sx={{ textAlign: 'center', flex: 'none', color: iconColor }} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NewSidebar;
