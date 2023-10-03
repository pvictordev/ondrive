import React from 'react'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsWhatsapp, BsPerson, BsInstagram } from 'react-icons/bs'
import {LiaFacebook} from 'react-icons/lia';

const Contact = () => {
  return (
    <>
    Contact adress
      <Container  maxW="full" mt={0} centerContent overflow="hidden">
      
      <Flex align={'baseline'}>
        <div>need additional info?</div>

        <Box
          bg="white"
          color="black"
          borderRadius="lg"
          border={'4px solid red'}
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>

            <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color=''
                        _hover={{ border: '2px solid red' }}
                        leftIcon={<MdPhone color="red" size="20px" />}>
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color=""
                        _hover={{ border: '2px solid red' }}
                        leftIcon={<MdEmail color="red" size="20px" />}>
                        ondrive@mail.ro
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color=""
                        _hover={{ border: '2px solid red' }}
                        leftIcon={<MdLocationOn color="red" size="20px" />}>
                        Sibiu, Romania
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'red' }}
                      icon={<LiaFacebook size="40px" />}
                    />
                    <IconButton
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'red' }}
                      icon={<BsWhatsapp size="28px" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'red' }}
                      icon={<BsInstagram size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="red" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </>
  )
}

export default Contact
