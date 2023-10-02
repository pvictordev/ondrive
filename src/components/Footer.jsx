import React from 'react'
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Center
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const Footer = () => {
  return (
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid 
           templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
           spacing={8}
        >
          <Stack spacing={6} align={'flex-start'}>
            <Box> 
              <Center>
                <Image boxSize={'2.5rem'} src='src/images/ondrive.png' />
                <Text fontSize='3xl' pl='3' fontWeight={'extrabold'} letterSpacing='tightest' color=''>Ondrive</Text>
              </Center>
            </Box>

            <Text fontSize={'sm'}>© 2023 Ondrive. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <Text>
                <FaYoutube/>
              </Text>
              <Text>
                <FaTwitter/>
              </Text>
              <Text>
                <FaInstagram/>
              </Text>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <Text>
              Working Hours
            </Text>
            <Box>
              Mon - Fri: 9:00AM - 9:00PM
            </Box>
            <Box>
              Sat: 9:00AM - 19:00PM
            </Box>
            <Box>
              Sun: Closed
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <Text> Stay up to date</Text>
            <Stack direction={'row'}>
              <Input
                placeholder='Your email address'
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('red.400', 'red.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'red.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
