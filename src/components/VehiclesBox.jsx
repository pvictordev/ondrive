import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import CarsList from "../Data/CarsList";

const VehiclesBox = (props) => {
  return (
    <Box>
      <Stack direction="column" fontSize={"md"}>
        <Text
          borderRadius={"3xl"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          textAlign={"center"}
          p={"1"}
          fontSize={"lg"}
          mb={"3"}
        >
          ${props.price}/ Per day
        </Text>
        <Text borderBottom={"2px solid red"}>
          <Text as={"span"} color={"red.500"}>
            Model:
          </Text>{" "}
          {props.model}
        </Text>
        <Text borderBottom={"2px solid red"}>
          {" "}
          <Text as={"span"} color={"red.500"}>
            Brand:
          </Text>{" "}
          {props.mark}
        </Text>
        <Text borderBottom={"2px solid red"}>
          <Text as={"span"} color={"red.500"}>
            Year:
          </Text>{" "}
          {props.year}
        </Text>
        <Text borderBottom={"2px solid red"}>
          <Text as={"span"} color={"red.500"}>
            Doors:
          </Text>{" "}
          {props.doors}
        </Text>
        <Text borderBottom={"2px solid red"}>
          <Text as={"span"} color={"red.500"}>
            Transmission:
          </Text>{" "}
          {props.transmission}
        </Text>
        <Text borderBottom={"2px solid red"}>
          <Text as={"span"} color={"red.500"}>
            Fuel:
          </Text>{" "}
          {props.fuel}
        </Text>
      </Stack>
    </Box>
  );
};

export default VehiclesBox;
