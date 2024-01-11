import React from "react";
import { Typography, Button, Box, Link } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const ContactPage = () => {
  return (
    <Box>
      <Typography variant="h3">Contact</Typography>
      <Box>
        <Link
          href="mailto:contact@example.com"
          variant="body1"
          sx={{ color: "primary.main" }}
        >
          <Button>
            <HelpIcon />
            <Typography>Email us help@thesneakersociety.com</Typography>
          </Button>
        </Link>
      </Box>
      <Box>
        <Box>
          <Typography>DM us on Instagram</Typography>
        </Box>
      </Box>
      <Link to="/TOS">
        <Typography variant="h3">Terms & Conditions</Typography>
      </Link>
    </Box>
  );
};

export default ContactPage;
