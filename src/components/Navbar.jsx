import React from 'react'
import { VStack, Box, HStack, Flex, Center, Spacer, Text, Image } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    
    <Flex align="center" py={'5'} px={'7'} >

    <Center className=' '>
      <Image boxSize={'2.5rem'} src='src/images/ondrive.png' />
      <Text fontSize='3xl' pl='3' fontWeight={'bold'} letterSpacing='tightest' color=''>Ondrive</Text>
    </Center>

    <Spacer />

      <HStack fontSize={'lg'}>
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
          <Link to={'/prices'}>Prices</Link>
        </Box>
        <Box p='2'>
          <Link to={'/team'}>Team</Link>
        </Box>
        <Box p='2'>
          <Link to={'/testimonials'}>Testimonials</Link>
        </Box>
        <Box p='2'>
          <Link to={'/contact'}>Contact</Link>
        </Box>
      </HStack>

    <Spacer />

    <HStack>
        <Box p='2' border='2px' borderColor={''} borderRadius='xl' backgroundColor={'red'} color={'white'} cursor={'pointer'}>
          <Link borderRadius='xl' style={{ textDecoration: "none" }} href='#home'>Sign in</Link>
        </Box>
        <Box p='2' border='2px' borderRadius='xl' backgroundColor={'red'} color={'white'} cursor={'pointer'}>
        <Link style={{ textDecoration: "none" }} href='#home'>Log in </Link>
        </Box>
        <Box p='2'>
        <SunIcon/>
        </Box>
    </HStack>

  </Flex>
  )
}

export default Navbar
