import React, { useState } from "react";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MemberChatSidebar = ({ onClose, selectUser }) => {
  const [conversations, setConversations] = useState([
    { name: "Jane", message: "Hey! How are you?", timestamp: "2 minutes ago" },
    {
      name: "Bob",
      message: "What are you up to today?",
      timestamp: "5 hours ago",
    },
    { name: "Alice", message: "Did you get my email?", timestamp: "1 day ago" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (name) => {
    const selectedUser = conversations.find(
      (conversation) => conversation.name === name
    );
    setSelectedUser(selectedUser);
    selectUser(name);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Drawer variant={isMobile ? "temporary" : "permanent"} onClose={onClose}>
      <Box sx={{ p: 2 }}>
        {isMobile && (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={onClose} aria-label="close-sidebar">
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        <Typography variant="h6">Messages</Typography>
        <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          margin="normal"
        />
        <List>
          {filteredConversations.map((conversation, index) => (
            <ListItem
              key={index}
              button
              sx={{ px: 1, py: 2 }}
              onClick={() => handleUserClick(conversation.name)}
            >
              <ListItemAvatar>
                <Avatar>
                  {selectedUser && selectedUser.name === conversation.name
                    ? selectedUser.name[0].toUpperCase()
                    : ""}
                </Avatar>
              </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="subtitle1" sx={{ display: { sm: "none", xs: "block" } }}>
            {conversation.name}
          </Typography>
        }
        secondary={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mt: isMobile ? 1 : 0,
            }}
          >
            <Typography variant="body2">{conversation.message}</Typography>
            <Typography variant="caption">{conversation.timestamp}</Typography>
          </Box>
        }
      />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MemberChatSidebar;
