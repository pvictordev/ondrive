import { useState } from "react";
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeRoute from "../components/HomeRoute";

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/signin";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box className="Signin" pt={24}>
      <HomeRoute className="Signin__title" title={"Sign In"} />

      <Container
        className="Signin__container"
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
              <FormControl id="fullName">
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormControl>

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
                <FormLabel>Create Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create your password"
                  required
                />
              </FormControl>
              <Link to="/login">Already have an account ? </Link>
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

export default SignIn;
