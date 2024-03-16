/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import HomeRoute from "../components/HomeRoute";

const LogIn = ({ isAuthentificated, setIsAuthentificated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
        alert("Incorrect credentials");
      }

      const data = await response.json();

      if (data.success) {
        setIsAuthentificated(true);
        // redirect to the home page
        window.location.href = data.redirect;
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

      <Flex minH={"100vh"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} pb={12} px={6}>
          <Stack align={"center"}>
            <Text fontSize={"lg"} color={"gray.600"}>
              Get inside into your account ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack
              as={"form"}
              method="POST"
              onSubmit={handleSubmit}
              spacing={4}
            >
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ff0000"
                            width="25px"
                            height="25px"
                            viewBox="0 0 32 32"
                            version="1.1"
                          >
                            <title>eye</title>
                            <path d="M30.941 15.177c-9.787-11.183-20.096-11.187-29.882 0-0.192 0.219-0.31 0.507-0.31 0.823s0.117 0.605 0.311 0.825l-0.001-0.001c4.893 5.591 9.919 8.427 14.939 8.427h0.001c5.021 0 10.047-2.836 14.941-8.427 0.192-0.219 0.309-0.507 0.309-0.823s-0.117-0.604-0.31-0.825l0.001 0.001zM3.682 16c8.299-8.961 16.336-8.961 24.637 0-8.301 8.961-16.34 8.961-24.637 0zM16 10.75c-2.899 0-5.25 2.351-5.25 5.25s2.351 5.25 5.25 5.25c2.899 0 5.25-2.351 5.25-5.25v0c-0.004-2.898-2.352-5.246-5.25-5.25h-0zM16 18.75c-1.519 0-2.75-1.231-2.75-2.75s1.231-2.75 2.75-2.75c1.519 0 2.75 1.231 2.75 2.75v0c-0.002 1.518-1.232 2.748-2.75 2.75h-0z" />
                          </svg>
                        </div>
                      ) : (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ff0000"
                            width="25px"
                            height="25px"
                            viewBox="0 0 32 32"
                            version="1.1"
                          >
                            <title>eye-slash</title>
                            <path d="M18.703 22.418c-4.987 1.227-9.906-0.881-15.022-6.417 1.227-1.344 2.555-2.553 3.985-3.633l0.073-0.053c0.311-0.23 0.511-0.596 0.511-1.008 0-0.69-0.56-1.25-1.25-1.25-0.278 0-0.535 0.091-0.743 0.244l0.003-0.002c-1.94 1.469-3.644 3.071-5.165 4.835l-0.036 0.043c-0.192 0.219-0.31 0.507-0.31 0.823s0.117 0.605 0.311 0.825l-0.001-0.001c4.903 5.604 9.917 8.427 14.948 8.427 1.169-0.002 2.302-0.149 3.385-0.423l-0.096 0.021c0.552-0.139 0.953-0.63 0.953-1.216 0-0.105-0.013-0.207-0.037-0.305l0.002 0.009c-0.145-0.551-0.638-0.951-1.226-0.951-0.102 0-0.2 0.012-0.295 0.035l0.009-0.002zM17.25 20c-0-0.69-0.56-1.25-1.25-1.25h-0c-1.518-0.002-2.748-1.232-2.75-2.75v-0c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0c0.004 2.898 2.352 5.246 5.25 5.25h0c0.69-0 1.25-0.56 1.25-1.25v-0zM24.372 22.603c2.513-1.651 4.675-3.561 6.535-5.738l0.035-0.042c0.192-0.219 0.309-0.507 0.309-0.823s-0.117-0.604-0.31-0.825l0.001 0.001c-6.911-7.893-13.98-10.246-21.028-7.032l-7.029-7.029c-0.226-0.225-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.655 0.363 0.881l27.999 28.001c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM28.318 16c-1.661 1.843-3.558 3.428-5.653 4.721l-0.111 0.064-2.076-2.076c0.482-0.771 0.768-1.706 0.771-2.709v-0.001c-0.004-2.898-2.352-5.246-5.25-5.25h-0c-1.003 0.003-1.939 0.29-2.732 0.785l0.022-0.013-1.467-1.467c5.474-2.061 10.894-0.115 16.496 5.945zM15.18 13.412c0.242-0.091 0.522-0.149 0.814-0.162l0.005-0c0.029-0.001 0.063-0.002 0.097-0.002 1.466 0 2.655 1.189 2.655 2.655 0 0.329-0.060 0.644-0.169 0.935l0.006-0.018z" />
                          </svg>
                        </div>
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type="submit"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Log In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default LogIn;
