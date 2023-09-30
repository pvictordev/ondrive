import React from 'react'
import { VStack, Box, HStack, Flex, Center, Spacer, Text, Image, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    // <nav className='nav'>
      
    // </nav>
    <Flex align="center" py={'5'} px={'7'} >

    <Center className=' '>
      <Image boxSize={'2.5rem'} src='src/images/ondrive.png' />
      <Text fontSize='3xl' pl='3' fontWeight={'black'} letterSpacing='wider' color=''>Ondrive</Text>
    </Center>

    <Spacer />

      <HStack fontSize={'lg'}>
        <Box p='2'>
          <a href='#home'>Home</a>
        </Box>
        <Box p='2'>
          <a href='#about'>About</a>
        </Box>
        <Box p='2'>
          <a href='#projects'>Projects</a>
        </Box>
        <Box p='2'>
          <a href='#contact'>Contact</a>
        </Box>
      </HStack>

    <Spacer />

    <HStack>
        <Box p='2' border='4px'>
          <Link style={{ textDecoration: "none" }} href='#home'>Sign In</Link>
        </Box>
        <Box p='2' border='4px'>
        <Link style={{ textDecoration: "none" }} href='#home'>Log in </Link>
        </Box>
        <Box p='2'>
          <a href='#home'>Theme</a>
        </Box>
    </HStack>

  </Flex>
  )
}

export default Navbar
