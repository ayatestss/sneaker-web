import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const SettingsLink = ({ to, icon, title, description }) => {
    return (
        <Link component={Box}
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#424242",
                padding: "16px",
                width: "250%",
                height: "90px",
                marginBottom: "20px",
                cursor: "pointer",
                textDecoration: "none",
                color: "white",
            }}
            to={to}
        >
            {icon} <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Box>
        </Link>

    )
}
export default SettingsLink;