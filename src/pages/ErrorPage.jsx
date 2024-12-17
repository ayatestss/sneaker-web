import { Box, Typography } from "@mui/material";
import StyledButton from "./HomePage/StackedButton";
import Logo from "../../assets/SNEAKER SOCIETY (Transparency).png";

export default function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        sx={{
          width: "500px", // Default width for larger screens
          height: "auto", // Auto height to maintain aspect ratio
          display: "block",
          margin: 0,
          padding: "0",
          "@media (max-width:600px)": {
            width: "300px", // Adjusted width for mobile
          },
        }}
      />

      {/* Typography */}
      <Typography
        sx={{
          fontSize: "24px", // Default font size for larger screens
          marginBottom: "24px",
          fontWeight: "500",
          "@media (max-width:600px)": {
            fontSize: "22px", // Adjusted font size for mobile
          },
        }}
      >
        Looks like this page does not exist!
      </Typography>

      {/* Button */}
      <StyledButton>Go Home</StyledButton>
    </Box>
  );
}
