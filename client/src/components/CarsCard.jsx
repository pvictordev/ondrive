/* eslint-disable react/prop-types */

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
function Rating(props) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(props.rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < props.rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {props.numReviews} review{props.numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const CarsCard = (props) => {
  return (
    <Flex className="CarsCard" alignItems="center" justifyContent="center">
      <Box
        className="CarsCard__"
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {props.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          className="CarsCard__img"
          src={props.imageURL}
          alt={`Picture of ${props.name}`}
          roundedTop="lg"
        />

        <Box className="CarsCard__description" p="6">
          <Box
            className="description__badge"
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            {props.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              <Link to={"/"}>Rent</Link>
            </Badge>
          </Box>

          <Flex
            className="description__name"
            mt="1"
            justifyContent="space-between"
            alignContent="center"
          >
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {props.name}
            </Box>
          </Flex>

          <Flex
            className="description__price"
            justifyContent="space-between"
            alignContent="center"
          >
            <Rating rating={props.rating} numReviews={props.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {props.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default CarsCard;
