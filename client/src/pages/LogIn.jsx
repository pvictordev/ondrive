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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        console.log("Incorrect credentials");
      }

      const data = await response.json();

      if (data.success) {
        // Authentication successful, redirect to the home page
        window.location.href = data.redirect;
        setIsAuthentificated(true);
      } else {
        // Authentication failed, handle error
        console.error("Authentication failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // show user authorization status
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
