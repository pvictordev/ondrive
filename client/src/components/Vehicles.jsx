import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Grid,
  ButtonGroup,
} from "@chakra-ui/react";
import CarsList from "../Data/CarsList";
import VehiclesBox from "./VehiclesBox";

const Vehicles = () => {
  const [active, setActive] = useState("first");

  return (
    <Box as="section" className="pick-section" m={{ base: 10, md: 24 }}>
      {/* maxW="container.lg" */}
      <Container maxW={""}>
        <Box className="pick-container">
          <Flex
            className="pick-container__title"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={5}
          >
            <Heading align="center" mb={5} as="h2" fontSize="4xl">
              Vehicle Models
            </Heading>
            <Text align={"center"} fontSize={"lg"}>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </Text>
          </Flex>

          <Grid
            className="pick-container__car-content"
            gridTemplateColumns={{ base: "1fr", lg: "1fr 2fr 1fr" }}
            gap={10}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <ButtonGroup className="pick-box" flexDirection={"column"} gap={4}>
              <Button
                onClick={() => setActive("first")}
                isActive={active == "first"}
                ml={2}
              >
                {CarsList[0].name}
              </Button>
              <Button
                onClick={() => setActive("second")}
                isActive={active == "second"}
              >
                {CarsList[1].name}
              </Button>
              <Button
                onClick={() => setActive("third")}
                isActive={active == "third"}
              >
                {CarsList[2].name}
              </Button>
              <Button
                onClick={() => setActive("fourth")}
                isActive={active == "fourth"}
              >
                {CarsList[3].name}
              </Button>
              <Button
                onClick={() => setActive("fiveth")}
                isActive={active == "fiveth"}
              >
                {CarsList[4].name}
              </Button>
              <Button
                onClick={() => setActive("sixth")}
                isActive={active == "sixth"}
              >
                {CarsList[5].name}
              </Button>
            </ButtonGroup>

            <Box className="pick-img">
              {active == "first" && (
                <img
                  style={{ borderRadius: "15px" }}
                  src={CarsList[0].imageURL}
                  alt=""
                />
              )}
              {active == "second" && (
                <img
                  style={{ borderRadius: "15px" }}
                  src={CarsList[1].imageURL}
                  alt=""
                />
              )}
              {active == "third" && (
                <img
                  style={{ borderRadius: "15px" }}
                  src={CarsList[2].imageURL}
                  alt=""
                />
              )}
              {active == "fourth" && (
                <img
                  style={{ borderRadius: "15px" }}
                  src={CarsList[3].imageURL}
                  alt=""
                />
              )}
              {active == "fiveth" && (
                <img
                  style={{ borderRadius: "15px" }}
                  src={CarsList[4].imageURL}
                  alt=""
                />
              )}
              {active == "sixth" && (
                <img
                  style={{ borderRadius: "15px" }}
                  src={CarsList[5].imageURL}
                  alt=""
                />
              )}
            </Box>

            <Box
              className="pick-box__car"
              // p={7}
              // border={"2px solid red"}
              // borderRadius={"3xl"}
            >
              {active == "first" && <VehiclesBox {...CarsList[0]} />}
              {active == "second" && <VehiclesBox {...CarsList[1]} />}
              {active == "third" && <VehiclesBox {...CarsList[2]} />}
              {active == "fourth" && <VehiclesBox {...CarsList[3]} />}
              {active == "fiveth" && <VehiclesBox {...CarsList[4]} />}
              {active == "sixth" && <VehiclesBox {...CarsList[5]} />}
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Vehicles;
