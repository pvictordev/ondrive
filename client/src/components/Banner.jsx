import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Banner(props) {
  return (
    <Flex
      className="Banner"
      bg={useColorModeValue("#2f2e2f", "gray.700")}
      color={"white"}
      flexDir={"column"}
      my={{ base: 10, xl: 24 }}
      p={{ base: 10, xl: 16 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        className="Banner__title"
        align={"center"}
        fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
        mb={2}
        fontWeight={"bold"}
      >
        {props.title}
      </Text>
      <Text
        className="Banner__text"
        align={"center"}
        fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
        fontWeight={"normal"}
        letterSpacing={"wider"}
      >
        <Text as={"span"} color={"red.500"}>
          {props.textColor}{" "}
        </Text>
        {props.description}
      </Text>
    </Flex>
  );
}
