import React, { useState } from "react";
import {
  Box,
  Text,
  Grid,
  Flex,
  Stack,
  Input,
  Button,
  FormLabel,
  FormControl,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { AiFillCar, AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import CarsList from "../Data/CarsList";

const BookRide = () => {
  const [book, setBook] = useState({
    car: "",
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
  };

  const carOptions = CarsList.map((car) => {
    return <option key={car.id}>{car.name}</option>;
  });

  return (
    <Flex
      className="BookRide"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      // border={'2px solid black'}
      m={{ base: 5, md: 24 }}
      p={{ base: 5, sm: 10 }}
      mb={{ base: 24, md: 40 }}
      boxShadow={"dark-lg"}
      rounded={"lg"}
    >
      <Text
        className="BookRide__title"
        fontWeight={"bold"}
        fontSize={{ base: "xl", sm: "3xl" }}
        mb={"10"}
      >
        Book ride
      </Text>
      <Grid
        as={"form"}
        onSubmit={handleSubmit}
        className="BookRide__grid"
        gap={10}
        w={"full"}
        alignItems={"flex-end"}
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        templateRows={{
          base: "repeat(6, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
      >
        {/* <form className="BookRide__form grid__item" > */}
        <FormControl className="form__car">
          <FormLabel
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            Select your car <AiFillCar />
          </FormLabel>
          <Select
            id="car"
            name="car"
            autoComplete="car"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleInputChange}
            value={book.car}
          >
            {carOptions}
          </Select>
        </FormControl>

        <FormControl className="form__city">
          <FormLabel
            display={"flex"}
            alignItems={"flex-start"}
            gap={"2"}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            Pick place <CiLocationOn />
          </FormLabel>
          <Select
            id="picllocation"
            name="pickLocation"
            autoComplete="city"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleInputChange}
            value={book.pickLocation}
          >
            <option>Sibiu</option>
            <option>Constanța</option>
            <option>Cluj</option>
            <option>Brașov</option>
            <option>București</option>
            <option>Timișoara</option>
          </Select>
        </FormControl>

        <FormControl className="form__city">
          <FormLabel
            display={"flex"}
            alignItems={"flex-start"}
            gap={"2"}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            Drop place <CiLocationOn />
          </FormLabel>
          <Select
            id="dropLocation"
            name="dropLocation"
            autoComplete="location"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleInputChange}
            value={book.dropLocation}
          >
            <option>Sibiu</option>
            <option>Constanța</option>
            <option>Cluj</option>
            <option>Brașov</option>
            <option>București</option>
            <option>Timișoara</option>
          </Select>
        </FormControl>

        <FormControl className="form__date">
          <FormLabel
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            Pick date <AiOutlineCalendar />
          </FormLabel>

          <Input
            id="pickDate"
            name="pickDate"
            type="date"
            onChange={handleInputChange}
            value={book.pickDate}
          />
        </FormControl>

        <FormControl className="form__date">
          <FormLabel
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            Pick date <AiOutlineCalendar />
          </FormLabel>

          <Input
            id="dropDate"
            name="dropDate"
            type="date"
            onChange={handleInputChange}
            value={book.dropDate}
          />
        </FormControl>

        <Button
          type="submit"
          className="grid__item"
          fontSize={{ base: "sm", sm: "lg" }}
          bg={useColorModeValue("red.500", "red.700")}
          color={"white"}
          _hover={{
            bg: "red.600",
          }}
        >
          Search
        </Button>
      </Grid>
    </Flex>
  );
};

export default BookRide;
