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
import HomeRoute from "../components/HomeRoute";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box className="Contact">
      <HomeRoute className="Contact__title" title={"Sign In"} />

      <Container
        className="Contanct__container"
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
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl id="fullName">
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </FormControl>

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
                <FormLabel>Create Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create your password"
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

export default SignIn;