import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Link,
  IconButton,
  Divider,
  Container,
  Grid,
  useTheme,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const theme = useTheme();
  const SPACING = 2;

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(8, 0),
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="left"
              gutterBottom
              sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" }, lineHeight: 1.4 }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "left",
                border: "1px solid white",
                padding: "8px",
                marginY: "28px",
              }}
            >
              <IconButton aria-label="email" sx={{ color: "white" }}>
                <EmailIcon />
              </IconButton>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: 1.6,
                  marginLeft: "0.5rem",
                }}
              >
                Email us
                <br />
                <Link
                  href="mailto:help@thesneakersociety.com"
                  sx={{ color: "white" }}
                >
                  help@thesneakersociety.com
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "left",
                border: "1px solid white",
                padding: "8px",
                marginY: "8px",
              }}
            >
              <IconButton aria-label="instagram" sx={{ color: "white" }}>
                <FaInstagram />
              </IconButton>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: 1.6,
                  marginLeft: "0.5rem",
                }}
              >
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                paddingTop: "50%",
                position: "relative",
                borderRadius: "4px",
              }}
            >
              <img
                src="assets/SNEAKER SOCIETY (Transparency).png"
                alt="Sneaker Society Logo"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={SPACING}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link href="/TOS" sx={{ textDecoration: "none", color: "white" }}>
            Terms & Conditions
          </Link>
          <Typography variant="body2">
            © 2023 The Sneaker Society - All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default ContactSection;
