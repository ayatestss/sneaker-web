import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  Stack,
  Button,
  MenuItem,
  Menu,
  Fade,
  Drawer,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import MenuIcon from "@mui/icons-material/Menu";
import MemberChatSidebar from "./MemberChatSidebar";
import MicOff from "../MemberChat/Icons/MicOff";
import InsertPhoto from "../MemberChat/Icons/InsertPhoto";
import AttachFile from "../MemberChat/Icons/AttachFile";
import { gql, useQuery } from "@apollo/client";

const CURRENT_CHAT_QUERY = gql`
  query currentChat($chatId: ID!) {
    getChatById(chatId: $chatId) {
      id
      name
      member {
        firstName
      }
      user {
        firstName
      }
      messages {
        senderType
        content
        createdAt
      }
    }
  }
`;

const Chat = () => {
  // const { messages: chatMessages } = data.getChatById;
  // console.log({ chatMessages });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { data, loading, error } = useQuery(CURRENT_CHAT_QUERY, {
    variables: {
      chatId: "66f0dc116a23f6d4bef2640e", // REPLACE WIHT CTX!!
    },
  });

  useEffect(() => {
    if (!loading && data && data.getChatById) {
      setMessages(data.getChatById.messages);
    }
  }, [loading, data]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    const now = new Date(); // get current date/time
    setMessages([
      ...messages,
      { text: message, sender: "USER", timestamp: now }, // add timestamp property
    ]);
    setMessage("");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files;
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };
  // // Add this state hook to manage the sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // // Add this function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <>Loadiing</>;
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar}>
          <Box sx={{ width: 250, overflow: "auto" }} role="presentation">
            <MemberChatSidebar onClose={toggleSidebar} />
          </Box>
        </Drawer>
        <AppBar position="static">
          <Box
            sx={{ display: "flex", alignItems: "center", padding: "8px 12px" }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="toggle-sidebar"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: "white", mr: 2 }}>J</Avatar>
            <Typography variant="h6">John</Typography>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<MoreVertIcon />}
              sx={{ marginLeft: "auto" }}
            >
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <DeleteIcon /> Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ArchiveIcon /> Archive
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MicOff /> Muted
                </MenuItem>
              </Menu>
            </Button>
          </Box>
        </AppBar>
        <Box>
          <List sx={{ marginBottom: "16px" }}>
            {messages.map((message, i) => (
              <ListItem
                key={i}
                alignItems="flex-start"
                sx={{
                  alignItems: "center",
                  "&.USER": {
                    flexDirection: "row-reverse",
                    textAlign: "right",
                  },
                }}
                className={message.senderType === "USER" ? "USER" : ""}
              >
                <Avatar
                  sx={{
                    bgcolor:
                      message.senderType === "USER"
                        ? "secondary.main"
                        : "primary.main",
                    mr: message.senderType === "USER" ? 0 : 2,
                    ml: message.senderType === "USER" ? 2 : 0,
                  }}
                >
                  {message.senderType[0]}
                </Avatar>
                <Box
                  component="div"
                  sx={{
                    borderRadius: "10px",
                    padding: "8px 12px",
                    backgroundColor:
                      message.senderType === "USER"
                        ? "secondary.light"
                        : "primary.light",
                  }}
                >
                  <Typography sx={{ color: "common.white" }}>
                    {message.content}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(parseInt(message.createdAt)).toLocaleString(
                      undefined,
                      {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                        timeZoneName: "short",
                      }
                    )}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <form onSubmit={handleSend}>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              padding: "8px",
              marginBottom: "16px",
            }}
          >
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              sx={{ flexGrow: 1, mr: 1 }}
              fullWidth
            />
          </Box>
        </form>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <AttachFile />
          <InsertPhoto />
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};
export default Chat;
