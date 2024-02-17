import {
  Typography,
  Box,
  Link,
  IconButton,
  Container,
  Grid,
  Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        px: 5,
      }}
    >
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', sm: '5.2rem' },
              lineHeight: 1.4,
            }}
          >
            Contact
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              textAlign: 'left',
              border: '1px solid white',
              padding: '8px',
              marginY: '28px',
            }}
          >
            <IconButton aria-label="email" sx={{ color: 'white' }}>
              <EmailIcon />
            </IconButton>
            <Typography
              variant="h3"
              sx={{
                lineHeight: 1.6,
                marginLeft: '0.5rem',
              }}
            >
              Email us!
              <br />
              <Link
                href="mailto:help@thesneakersociety.com"
                sx={{
                  color: 'white',
                  fontSize: { xs: '1.1rem' },
                }}
              >
                help@thesneakersociety.com
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              textAlign: 'left',
              border: '1px solid white',
              padding: '8px',
              marginY: '8px',
            }}
          >
            <IconButton aria-label="instagram" sx={{ color: 'white' }}>
              <FaInstagram />
            </IconButton>
            <Typography
              variant="h3"
              sx={{
                lineHeight: 1.6,
                marginLeft: '0.5rem',
              }}
            >
              DM us on Instagram
              <br />
              <Link
                href="https://instagram.com/thesneakersociety1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '1.1rem' },
                }}
              >
                @thesneakersociety1
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              paddingTop: '80%',
              position: 'relative',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <img
              src="assets/SNEAKER SOCIETY (Transparency).png"
              alt="Sneaker Society Logo"
              style={{
                position: 'absolute',
                top: 10,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '2px',
              }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Link href="/TOS" sx={{ textDecoration: 'none', color: 'white' }}>
          Terms & Conditions
        </Link>
        <Typography variant="body2">
          © 2023 The Sneaker Society - All rights reserved
        </Typography>
      </Stack> */}
    </Box>
  );
};
export default ContactSection;
