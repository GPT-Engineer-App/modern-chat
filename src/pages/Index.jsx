import React from "react";
import { ChakraProvider, Box, VStack, Text, Button, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSignInAlt, FaComments } from "react-icons/fa";

// Theme configuration for Chakra UI
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
});

// Dummy pages
const LoginPage = () => (
  <VStack spacing={8}>
    <Text fontSize="2xl">Login Page</Text>
    <Button leftIcon={<FaSignInAlt />} colorScheme="teal">
      Sign In
    </Button>
  </VStack>
);

const ChatListPage = () => (
  <VStack spacing={8}>
    <Text fontSize="2xl">Chats</Text>
    <Link to="/chat">
      <Button leftIcon={<FaComments />} colorScheme="pink">
        Go to Chat
      </Button>
    </Link>
  </VStack>
);

const ChatPage = () => (
  <VStack spacing={8}>
    <Text fontSize="2xl">Chat Page</Text>
    <Text>This is where the chat messages would appear.</Text>
  </VStack>
);

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box p={5}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/chats" element={<ChatListPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default Index;
