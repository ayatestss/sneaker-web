import React, { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ChatWrapper = styled(Box)({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  width: '300px',
  borderRadius: '5px',
  overflow: 'hidden',
  backgroundColor: '#fff', // Set the background color to white
  border: '2px solid #0d6efd', // Set the outer border color
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
});

const ChatHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer',
});

const ChatContent = styled(Box)({
  flex: 1, // Fill remaining vertical space
  border: '1px solid #000',
  borderRadius: '5px',
  overflow: 'scroll',
  padding: '10px',
  marginBottom: '10px',
});

const ChatControls = styled(Box)({
  padding: '10px',
});

const ChatBubble = styled(Box)(({ sent }) => ({
  backgroundColor: sent ? '#DCF8C6' : '#fff',
  color: sent ? '#333' : '#333',
  border: sent ? '1px solid #ccc' : '1px solid #ccc',
  borderRadius: sent ? '20px 20px 0 20px' : '20px 20px 20px 0',
  padding: '10px',
  marginBottom: '10px',
  alignSelf: sent ? 'flex-end' : 'flex-start',
}));

function ChatBoxes() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [activeUser, setActiveUser] = useState('');

  const chatBoxRef = useRef();

  const handleSend = () => {
    try {
      if (newMessage.trim()) {
        setMessages((prevMessages) => [...prevMessages, { text: newMessage, sent: true }]);
        setNewMessage('');

        if (!activeUser) {
          startChatWithUser("Sarah"); // Start a conversation with Sarah when sending the first message
        }
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const toggleChatbox = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const startChatWithUser = (user) => {
    setActiveUser(user);
    setVisible(true);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1]?.sent) {
      // Simulate auto-response after sending a message
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is an auto-response", sent: false },
]);
}, 1000);
}
}, [messages]);

return (
<ChatWrapper>
<ChatHeader onClick={toggleChatbox}>{activeUser}</ChatHeader>
{visible && (
<Box>
<ChatContent ref={chatBoxRef}>
{messages.map((message, index) => (
<ChatBubble key={index} sent={message.sent}>
{message.text}
</ChatBubble>
))}
</ChatContent>
<ChatControls>
<TextField
label="Type your message"
variant="outlined"
multiline
rows={4}
value={newMessage}
onKeyDown={handleKeyDown}
onChange={(event) => setNewMessage(event.target.value)}
fullWidth
style={{ backgroundColor: '#fff', marginBottom: '10px' }}
/>
<Button variant="contained" onClick={handleSend} fullWidth>
Send
</Button>
</ChatControls>
</Box>
)}
</ChatWrapper>
);
}

export default ChatBoxes;
