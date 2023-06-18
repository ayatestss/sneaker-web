import { useState } from "react";
import { Box, IconButton, MenuList, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageIcon from "@mui/icons-material/Message";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
import { ColorModeContext } from "../theme/theme";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../theme/theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuList active={selected === title} onClick={() => setSelected(title)}>
      <Link to={to} style={{ display: "flex", alignItems: "center" }}>
        {icon}
        <Typography>{title}</Typography>
      </Link>
    </MenuList>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        background: `${colors.grey[900]} !important`,
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: 300, // Adjust the width as needed
      }}
    >
      <MenuList
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight={"bold"}
          color={colors.grey[100]}
        >
          ADMINIS
        </Typography>
      </MenuList>

      <Box mb="15px">
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

      <Box paddingLeft={"30%"}>
        <Box paddingRight={"20%"}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color={colors.grey[100]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Main Menu
          </Typography>
        </Box>
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
          setSelected={setSelected}
        />
        <Item
          title="Invoices"
          to="/invoices"
          icon={<ReceiptOutlinedIcon />}
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
          variant="h3"
          fontWeight={"bold"}
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
    </Box>
  );
};

export default Sidebar;
