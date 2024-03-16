/* eslint-disable react/prop-types */
import { Box, Text, Stack, useColorModeValue } from "@chakra-ui/react";

const VehiclesBox = (props) => {
  return (
    <Box>
      <Stack direction="column" fontSize={"md"} spacing={4}>
        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          textAlign={"center"}
          p={"1.5"}
          fontSize={"lg"}
        >
          ${props.price}/ Per day
        </Text>

        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          fontSize={"lg"}
          p={"1.5"}
        >
          Model: {props.model}
        </Text>

        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          p={"1.5"}
          fontSize={"lg"}
        >
          Brand: {props.mark}
        </Text>

        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          p={"1.5"}
          fontSize={"lg"}
        >
          Year: {props.year}
        </Text>

        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          p={"1.5"}
          fontSize={"lg"}
        >
          Doors: {props.doors}
        </Text>

        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          p={"1.5"}
          fontSize={"lg"}
        >
          Transmission: {props.transmission}
        </Text>

        <Text
          borderRadius={"lg"}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          p={"1"}
          fontSize={"lg"}
        >
          Fuel: {props.fuel}
        </Text>
      </Stack>
    </Box>
  );
};

export default VehiclesBox;
