/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HomeRoute(props) {
  return (
    <Box m={10} display={"flex"} flexDir={"column"}>
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {props.title}
      </Text>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        <Text
          as={"span"}
          _hover={{ color: "red.500", transition: "color 0.3s" }}
        >
          <Link to={"/"}>Home</Link>
        </Text>{" "}
        / {props.title}
      </Text>
    </Box>
  );
}
