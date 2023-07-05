import React from 'react';
import { Box, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselSection() {
  return (
    <Container>
      <Box my={8}>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src="https://via.placeholder.com/600x300" alt="Image 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x300" alt="Image 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x300" alt="Image 3" />
          </div>
        </Carousel>
      </Box>
    </Container>
  );
}

export default CarouselSection;

