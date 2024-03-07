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

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <Box className="Contact">
      <HomeRoute className="Contact__title" title={"Log In"} />

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
