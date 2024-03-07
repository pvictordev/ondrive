import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

import {MdPriceCheck} from 'react-icons/md'; 
import {AiOutlineWifi, AiOutlineFileAdd} from 'react-icons/ai';
import {MdArrowForwardIos} from 'react-icons/md';
import OfferImage from '../images/offer-img.png';


const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      className="Card"
      // maxW={{ base: 'full', md: '275px' }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Flex
        // align={'start'}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          p={5}
          mr={5}
          bg={useColorModeValue("red.500", "red.700")}
          display={{ base: "none", sm: "flex" }}
        >
          {icon}
        </Flex>
        {/* {{base:'flex-start', md:'center'}} */}
        <Box mt={2}>
          <Heading
            size="md"
            alignItems={"center"}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
          >
            {heading}
          </Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

const Offer = () => {
  return (
    <Box
      className="offer"
      m={{base:'5', md:'24'}}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={""}
      alignItems={""}
    >
      <Image src={OfferImage} w={""} h={""} />

      <Box
        mt={5}
        display={"flex"}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      
      >
        <Stack
          spacing={4}
          as={Container}
          // maxW={'3xl'}
          textAlign={"center"}
          gap={{base:'5', lg:'10'}}
        >
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight={"bold"}
          >
            What we offer
          </Heading>

          <Text
            color={"gray.600"}
            fontSize={{ base: "md", sm: "lg", lg: "xl" }}
          >
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </Text>
          <Box
            display={"flex"}
            className="box"
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <Button
              maxW={"170px"}
              gap={2}
              fontSize={{base:'sm', md:'md', lg:'lg'}}
              display={"flex"}
              bg={useColorModeValue("red.500", "red.700")}
              _hover={{ bg: "red.600" }}
              color={"white"}
            >
              Find Details <MdArrowForwardIos />
            </Button>
          </Box>
        </Stack>

        <Container
          // maxW={'5xl'}
          mt={12}
        >
          <Flex flexDirection={"column"} gridGap={6} alignItems={"flex-end"}>
            <Card
              heading={"Transparency"}
              icon={<Icon as={MdPriceCheck} w={10} h={10} />}
              description={
                "Enjoy your car with our no hidden charges policy. We believe in transparent and honest pricing."
              }
              href={"#"}
            />
            <Card
              heading={"Online Booking"}
              icon={<Icon as={AiOutlineWifi} w={10} h={10} />}
              description={
                "Our online booking service allows customers to reserve their vehicles in advance from the comfort of their homes."
              }
              href={"#"}
            />
            <Card
              heading={"Additional Services"}
              icon={<Icon as={AiOutlineFileAdd} w={10} h={10} />}
              description={
                "We offer additional services you offer, such as GPS rental, child safety seats, or insurance options."
              }
              href={"#"}
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default Offer
