/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
  Stack,
  Container,
  Heading,
  StackDivider,
  Icon,
  Image,
} from "@chakra-ui/react";
import { BsPerson, BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import RentSteps from "../components/RentSteps";
import HomeRoute from "../components/HomeRoute";
import Banner from "../components/Banner";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const About = () => {
  return (
    <Box className="About" pt={24}>
      <HomeRoute className="About__title" title={"About"} />

      <Container className="About__container" maxW={"5xl"} my={24}>
        <SimpleGrid
          className="container__grid"
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <Stack className="container__text" spacing={4}>
            <Text
              className="text__badge"
              textTransform={"uppercase"}
              color={"red.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("red.100", "red.800")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              About us
            </Text>
            <Heading className="text__title">
              Ondrive is a big car rental company
            </Heading>
            <Text className="text__content" color={"gray.500"} fontSize={"lg"}>
              The shimmering stars danced in the velvety night sky, casting
              their silvery glow upon the world below. A gentle breeze whispered
              through the trees, rustling their leaves in a secret conversation.
              In the distance, the faint hum of a distant city could be heard, a
              testament to the ceaseless rhythm of human life. And in that
              moment, as the universe unfolded its mysteries, a sense of wonder
              and awe filled the heart. Feel free to let me know if you&apos;d
              like more random text or have any specific requests!
            </Text>
            <Stack
              className="text__features"
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon as={BsPerson} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"More than 500 emoloyees"}
              />
              <Feature
                icon={<Icon as={BsPeople} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"25,000+ Happy clients"}
              />
              <Feature
                icon={<Icon as={GoLocation} color={"purple.500"} w={5} h={5} />}
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"7 Headquaters "}
              />
            </Stack>
          </Stack>

          <Flex className="container__image">
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <Banner
        className="About__banner"
        title="We have a big background in car rental!"
        textColor="Better"
        description="than competitors, we have things that they do not"
      />
      <RentSteps className="About__steps  " />

      {/* <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Text textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        Our company is expanding, you could be too.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Employers'} stat={'1000'} icon={<BsPerson size={'3em'} />} />
        <StatsCard title={'Happy Clients'} stat={'25,000'} icon={<BsPeople size={'3em'} />} />
        <StatsCard title={'Headquarters'} stat={'7'} icon={<GoLocation size={'3em'} />} />
      </SimpleGrid>
    </Box> */}
    </Box>
  );
};

export default About;
