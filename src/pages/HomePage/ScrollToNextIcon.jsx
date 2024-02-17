import React from 'react';
import { Box, Icon } from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md';

const ScrollToNextIcon = ({ scrollToNext }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 2,
        cursor: 'pointer',
        zIndex: 9998,
      }}
      onClick={scrollToNext}
    >
      <Icon
        sx={{
          fontSize: 48,
          paddingRight: '55px',
        }}
      >
        <MdOutlineExpandMore />
      </Icon>
    </Box>
  );
};

export default ScrollToNextIcon;
