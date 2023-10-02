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
           templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
           spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text>Logo</Text>
            </Box>

            <Text fontSize={'sm'}>© 2023 Company Name. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <Text>
                Twitter
              </Text>
              <Text>
                Facebook
              </Text>
              <Text>
                Youtube
              </Text>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <Text>
              Should import here list header
            </Text>
            <Box>
              About us
            </Box>
            <Box>
              Blog
            </Box>
            <Box>
              Pricing
            </Box>
            <Box>
              Testimonials
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text> Should import here list header</Text>
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
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
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
