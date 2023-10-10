import React from 'react'
import { VStack, Box, HStack, Flex, Center, Spacer, Text, Image,  useMediaQuery, IconButton, useColorMode, Button, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,useColorModeValue } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../images/ondrive.png'

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const [isLargerThanMobile] = useMediaQuery('(min-width: 890px)')

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (  
  <Flex align="center" py={5} px={{base:2, sm:'7'}}  >

    <Center>
      <Image display={{base:'none', sm:'block'}} boxSize={'2.5rem'} src={Logo} />
      <Text fontSize='3xl' pl='3' fontWeight={'extrabold'} letterSpacing='tightest' color=''>Ondrive</Text>
    </Center>

    {isLargerThanMobile ? (
    <>
    <Spacer />

      <HStack fontSize={'lg'} fontWeight={'semibold'}>
        <Box p='2'>
          <Link to={'/'}>Home</Link>
        </Box>
        <Box p='2'>
          <Link to={'/about'}>About</Link>
        </Box>
        <Box p='2'>
          <Link to={'/cars'}>Cars</Link>
        </Box>
        <Box p='2'>
          <Link to={'/blog'}>Blog</Link>
        </Box>
        <Box p='2'>
          <Link to={'/team'}>Team</Link>
        </Box>
        <Box p='2'>
          <Link to={'/contact'}>Contact</Link>
        </Box>
      </HStack>

    <Spacer />

    <HStack>
        <Box p='2'
            borderColor={''}
            borderRadius='xl'
            bg={useColorModeValue('red.500', 'red.700')}
            _hover={{ bg: 'red.600' }}
            color={'white'}
            cursor={'pointer'}>
          <Link borderRadius='xl' style={{ textDecoration: "none" }} href='#home'>Sign in</Link>
        </Box>
        <Box p='2'
          borderRadius='xl'
          bg={useColorModeValue('red.500', 'red.700')}
          _hover={{ bg: 'red.600' }}
          color={'white'} 
          cursor={'pointer'}
        >
        <Link style={{ textDecoration: "none" }} href='#home'>Log in </Link>
        </Box>
        <Box p='2'>
        <Button onClick={toggleColorMode}> {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
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
    <Drawer placement="right" onClose={handleDrawerClose} isOpen={isDrawerOpen}>
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
    <Button onClick={toggleColorMode}> {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
  </Box>
  )}

  </Flex>
  )
}

export default Navbar
