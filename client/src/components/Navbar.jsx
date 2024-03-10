/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import {
  Box,
  HStack,
  Flex,
  Center,
  Spacer,
  Text,
  Image,
  useMediaQuery,
  IconButton,
  useColorMode,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../images/ondrive.png";

const Navbar = ({ isAuthentificated }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isLargerThanMobile] = useMediaQuery("(min-width: 890px)");

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    localStorage.setItem(
      "isAuthentificated",
      JSON.stringify(isAuthentificated)
    );
  }, [isAuthentificated]);

  return (
    <Flex
      align="center"
      py={5}
      px={{ base: 2, sm: "7" }}
      position={"fixed"}
      top={0}
      width={"full"}
      zIndex={10}
      bg={useColorModeValue("white", "var(--chakra-colors-chakra-body-bg)")}
    >
      <Center>
        <Image
          display={{ base: "none", sm: "block" }}
          boxSize={"2.5rem"}
          src={Logo}
        />
        <Text
          fontSize="3xl"
          pl="3"
          fontWeight={"extrabold"}
          letterSpacing="tightest"
          color=""
        >
          <Link to="/">Ondrive</Link>
        </Text>
      </Center>

      {isLargerThanMobile ? (
        <>
          <Spacer />

          <HStack fontSize={"lg"} fontWeight={"semibold"}>
            <Box _hover={{ color: "red.500", transition: "color 0.3s" }} p="2">
              <Link to={"/"}>Home</Link>
            </Box>
            <Box _hover={{ color: "red.500", transition: "color 0.3s" }} p="2">
              <Link to={"/about"}>About</Link>
            </Box>
            <Box _hover={{ color: "red.500", transition: "color 0.3s" }} p="2">
              <Link to={"/cars"}>Cars</Link>
            </Box>
            <Box _hover={{ color: "red.500", transition: "color 0.3s" }} p="2">
              <Link to={"/blog"}>Blog</Link>
            </Box>
            <Box _hover={{ color: "red.500", transition: "color 0.3s" }} p="2">
              <Link to={"/team"}>Team</Link>
            </Box>
            <Box _hover={{ color: "red.500", transition: "color 0.3s" }} p="2">
              <Link to={"/contact"}>Contact</Link>
            </Box>
          </HStack>

          <Spacer />

          <HStack>
            {isAuthentificated ? (
              <Box p="2">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User Profile Picture"
                  boxSize="34px"
                  borderRadius={"full"}
                  cursor={"pointer"}
                />
              </Box>
            ) : (
              <>
                <Box
                  p="2"
                  borderColor={""}
                  borderRadius="xl"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={useColorModeValue("red.500", "red.700")}
                  _hover={{ bg: "red.600" }}
                  color={"white"}
                  cursor={"pointer"}
                >
                  <Link
                    to={"/signin"}
                    borderRadius="xl"
                    style={{ textDecoration: "none" }}
                  >
                    Sign in
                  </Link>
                </Box>
                <Box
                  p="2"
                  borderRadius="xl"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={useColorModeValue("red.500", "red.700")}
                  _hover={{ bg: "red.600" }}
                  color={"white"}
                  cursor={"pointer"}
                >
                  <Link to={"/login"} style={{ textDecoration: "none" }}>
                    Log in{" "}
                  </Link>
                </Box>
              </>
            )}

            <Box p="2">
              <Button onClick={toggleColorMode}>
                {" "}
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Box>
          </HStack>
        </>
      ) : (
        <Box ml="auto">
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={handleDrawerOpen}
          />
          <Drawer
            placement="right"
            onClose={handleDrawerClose}
            isOpen={isDrawerOpen}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <List spacing={2}>
                    <ListItem>
                      <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/about">About</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/cars">Cars</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/blog">Blog</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/team">Team</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/contact">Contact</Link>
                    </ListItem>
                  </List>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
          <Button onClick={toggleColorMode}>
            {" "}
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
