import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaCircle } from "react-icons/fa"; // React Icons
import StyledButton from "./HomePage/StackedButton";

const StripePage = () => {
    const handleSetUpStripe = () => {
        console.log("Navigate to Stripe setup");
        // Add Stripe setup logic here
    };

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
            {/* Circle Icon */}
            <Box sx={{ fontSize: "120px", color: "red" }}>
                <FaCircle />
            </Box>

            {/* Title */}
            <Typography
                sx={{
                    fontSize: { xs: "48px", sm: "72px", md: "96px" }, // Responsive font sizes
                    fontWeight: "600",
                }}
            >
                Set up Stripe
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font sizes
                    marginBottom: "32px",
                    maxWidth: "600px",
                    lineHeight: { xs: "18px", sm: "19px", md: "19.5px" }, // Responsive line heights
                    fontWeight: "500",
                }}
            >
                We’ve partnered with Stripe to provide a fast, secure, and reliable payment experience. Click the button below to set up your Stripe account!
            </Typography>

            {/* Button */}
            <StyledButton
                variant="contained"
                onClick={handleSetUpStripe}
                sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    height: "65px",
                    "&::after": {
                        height: "70px"
                    }
                }}
            >
                Set up Stripe
            </StyledButton>
        </Box>
    );
};

export default StripePage;
