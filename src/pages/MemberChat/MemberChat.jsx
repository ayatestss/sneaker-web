import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import MemberChatSidebar from "./MemberChatSidebar";
import { ApolloProvider, useQuery, gql, ApolloClient, InMemoryCache } from "@apollo/client";

const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      content
      sender
      recipient
    }
  }
`;

function Messages() {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching messages: {error.message}</div>;
  }

  return (
    <div>
      {data.messages.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))}
    </div>
  );
}

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Chat = ({ currentChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("/api/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    try {
      const response = await axios.post("/api/messages", { text: message });
      setMessages((prevMessages) => [...prevMessages, response.data]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (today.toDateString() === date.toDateString()) {
      return "Today";
    } else if (yesterday.toDateString() === date.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  const isDateDifferent = (date1, date2) => {
    if (!date1 || !date2) {
      return true;
    }
    return date1.toDateString() !== date2.toDateString();
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <ApolloProvider client={client}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Drawer anchor="left" open={sidebarOpen} onClose={closeSidebar}>
          <Box sx={{ width: 250, overflow: "auto" }} role="presentation">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close-sidebar"
              onClick={(e) => {
                e.stopPropagation();
                closeSidebar();
              }}
            >
              <CloseIcon />
            </IconButton>
            <MemberChatSidebar />
          </Box>
        </Drawer>
        <AppBar position="static">
          <Box sx={{ display: "flex", alignItems: "center", padding: "8px 12px" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="toggle-sidebar"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar />
            <Typography variant="h6">{currentChat}</Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" sx={{ marginLeft: "auto" }}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </AppBar>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <List sx={{ marginBottom: "16px" }}>
            {messages.map((message, i) => (
              <div key={i}>
                {isDateDifferent(
                  new Date(message.timestamp),
                  new Date((messages[i - 1] || {}).timestamp)
                ) && (
                  <Box
                    component="div"
                    sx={{ textAlign: "center", marginTop: "16px" }}
                  >
                    <Typography variant="caption">
                      {formatDate(new Date(message.timestamp))}
                    </Typography>
                  </Box>
                )}
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    "&.me": {
                      flexDirection: "row-reverse",
                      textAlign: "right",
                    },
                  }}
                  className={message.sender === "me" ? "me" : ""}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        message.sender === "me" ? "secondary.main" : "primary.main",
                      marginRight: message.sender === "me" ? "8px" : "2px",
                      marginLeft: message.sender === "me" ? "0px" : "8px",
                    }}
                  >
                    {message.sender[0].toUpperCase()}
                  </Avatar>
                  <Box
                    component="div"
                    sx={{
                      borderRadius: "10px",
                      padding: "8px 12px",
                      backgroundColor:
                        message.sender === "me"
                          ? "secondary.light"
                          : "primary.light",
                    }}
                  >
                    <Typography sx={{ color: "common.white" }}>
                      {message.text}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </Typography>
                  </Box>
                </ListItem>
              </div>
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
              sx={{ flexGrow: 1, marginRight: "8px" }}
              fullWidth
            />
            <IconButton type="submit">
              <SendIcon />
            </IconButton>
          </Box>
        </form>
      </Box>
    </ApolloProvider>
  );
};

export default Chat;
