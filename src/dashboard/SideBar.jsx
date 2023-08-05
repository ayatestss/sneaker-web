import { useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
//import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageIcon from "@mui/icons-material/Message";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
import { ColorModeContext } from "../theme/theme";
import { useContext } from "react";
import { tokens } from "../theme/theme";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "5px 5px 5px 20px",
        cursor: "pointer",
        color: colors.grey[100],
        "&:hover": {
          color: "#868dfb",
        },
        ...(selected === title && {
          color: "#6870fa",
        }),
      }}
      onClick={() => setSelected(title)}
    >
      {icon}
      <Typography>{title}</Typography>
      <Link to={to} />
    </Box>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        backgroundColor: colors.grey[900],
        height: 700,
        ...(isCollapsed && {
          width: "64px",
        }),
        ...(isCollapsed
          ? {
              "& .MuiTypography-root": {
                display: "none",
              },
            }
          : {
              "& .MuiTypography-root": {
                display: "block",
              },
            }),
      }}
    >
      <Box
        sx={{
          margin: "10px 0 20px 0",
          color: colors.grey[100],
          ...(isCollapsed && {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ml: "15px",
          }),
        }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {!isCollapsed && (
          <Typography variant="h3" color={colors.grey[100]}>
            ADMINIS
          </Typography>
        )}
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {!isCollapsed && (
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              width="200px"
              height="200px"
              src={`../../assets/SNEAKER SOCIETY (Transparency).png`}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
        </Box>
      )}

      <Typography
        variant="h6"
        color={colors.grey[100]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Main Menu
      </Typography>
      <Item
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Explore"
        to="/"
        icon={<ExploreIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Banking"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Services"
        to="/services"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Messages"
        to="/"
        icon={<MessageIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Groups"
        to="/"
        icon={<GroupsIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
      <Typography
        variant="h6"
        color={colors.grey[100]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Account
      </Typography>
      <Item
        title="Help"
        to="/faq"
        icon={<HelpOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Member Settings"
        to="/membersettings"
        icon={<SettingsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};
export default Sidebar;
