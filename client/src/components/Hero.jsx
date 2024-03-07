import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import HeroImage from '../images/car.png'

export default function Hero() {

  return (
    <Container className="Hero" maxW={"7xl"} p={{ base: "5", md: "12" }}>
      <Stack
        className="Hero__container"
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 23 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          className="container__content"
          flex={1}
          alignItems={{ base: "center", md: "flex-start" }}
          spacing={{ base: 5, md: 10 }}
        >
          <Heading
            className="content__text"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              className="content__title"
              as={"span"}
              position={"relative"}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight={"bold"}
            >
              <Text className="title__text" as={"span"} color={"red"}>
                Save
              </Text>{" "}
              your money with our car{" "}
              <Text as={"span"} color={"red"}>
                rental
              </Text>
            </Text>
          </Heading>
          <Text
            className="title__description"
            color={"gray.500"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            {" "}
            Rent the car of your dreams for a few days or even a few hours and
            enjoy the ride.
          </Text>

          <Stack
            className="content__buttons"
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              color={"white"}
              bg={useColorModeValue("red.500", "red.700")}
              _hover={{ bg: "red.600" }}
            >
              <Link style={{textDecoration:"none"}} href="#bookRide">Book ride</Link>
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Image
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={HeroImage}
            display={{ base: "none", md: "block" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}





