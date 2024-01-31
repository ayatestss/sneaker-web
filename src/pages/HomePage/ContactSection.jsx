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
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [animationActive, setAnimationActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currenetScrollY = window.pageYOffset;
      setIsScrollingUp(currenetScrollY < prevScrollY);
      prevScrollY = currenetScrollY;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elemenetOffset =
        document.getElementById("connectSection").offsetTop;
      const activationPoint = elemenetOffset - windowHeight * 0.9;
      const deactivationPoint = elemenetOffset + windowHeight * 0.5;

      if (
        scrollPosition > activationPoint &&
        scrollPosition < deactivationPoint
      ) {
        setAnimationActive(true);
      } else if (scrollPosition >= deactivationPoint) {
        setAnimationActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const connectSectionStyle = {
    transform: animationActive
      ? "translateX(0)"
      : isScrollingUp
      ? "translateX(100%)"
      : "translateX(-100%)",
    transition: "transform 0.5s ease-in-out",
    opacity: animationActive ? 1 : 0,
  };

  return (
    <Box
      id="connectSection"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(8, 0),
        textAlign: "center",
        ...connectSectionStyle,
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
              }}
            >
              <IconButton aria-label="email" sx={{ color: "white" }}>
                <EmailIcon />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem" },
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
              }}
            >
              <IconButton aria-label="instagram" sx={{ color: "white" }}>
                <FaInstagram />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem" },
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
                  top: 0,
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
        <Divider sx={{ backgroundColor: "grey", marginY: "1rem" }} />
        <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
          © 2023 The Sneaker Society - All rights reserved
        </Typography>
        <Link href="/TOS" sx={{ textDecoration: "none", color: "white" }}>
          Terms & conditions
        </Link>
      </Container>
    </Box>
  );
};
export default ContactSection;
