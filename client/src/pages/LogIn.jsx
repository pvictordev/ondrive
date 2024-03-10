/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import HomeRoute from "../components/HomeRoute";

const LogIn = ({ isAuthentificated, setIsAuthentificated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Authentificated:", isAuthentificated);

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Authentication successful, redirect to the home page
          window.location.href = data.redirect;
          setIsAuthentificated(true);
        } else {
          // Authentication failed, handle error
          console.error("Authentication failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    localStorage.setItem(
      "isAuthentificated",
      JSON.stringify(isAuthentificated)
    );
  }, [isAuthentificated]);

  return (
    <Box className="Login" pt={24}>
      <HomeRoute className="Login__title" title={"Log In"} />

      <Container
        className="Login__container"
        maxW="full"
        centerContent
        overflow="hidden"
      >
        <Box
          maxW={""}
          p="6"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          margin="0 0 15rem 0"
        >
          <form method="POST" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </FormControl>
              <Button type="submit" colorScheme="red">
                Sign In
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LogIn;
