import React from "react";
import {
  Typography,
  Button,
  Box,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "1rem" }}>
        Contact
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <IconButton aria-label="email">
          <EmailIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography variant="body1">
          Email us
          <br />
          <Link
            href="mailto:help@thesneakersociety.com"
            sx={{ color: "white" }}
          >
            help@thesneakersociety.com
          </Link>
        </Typography>
        <IconButton aria-label="instagram">
          <FaInstagram />
        </IconButton>
        <Typography variant="body1">
          DM us on Instagram
          <br />
          <Link
            href="https://instagram.com/thesneakersociety1"
            sx={{ color: "white" }}
          >
            @thesneakersociety1
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "grey", marginBottom: "1rem" }} />
      <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
        @ 2023 The Sneaker Society - All rights reserved
      </Typography>
      <Link href="#" to="/TOS" sx={{ color: grey, textDecoration: "none" }}>
        Terms & conditions
      </Link>
    </Box>
  );
};

export default ContactSection;
