import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Grid,
  Flex,
  Input,
  Button,
  FormLabel,
  FormControl,
  Select,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import { AiFillCar, AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CarsList from "../Data/CarsList";
import { BiTime } from "react-icons/bi";

const BookRide = () => {
  const [book, setBook] = useState({
    car: "",
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "",
  });

  const [selectedCarImage, setSelectedCarImage] = useState("");
  const [showError, setShowError] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });

    const selectedCar = CarsList.find((car) => car.name === value);
    if (selectedCar) {
      setSelectedCarImage(selectedCar.imageURL);
    } else {
      setSelectedCarImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const { car, pickLocation, dropLocation, pickDate, dropDate } = book;
      if (car && pickLocation && dropLocation && pickDate && dropDate) {

        onOpen();

        setShowError(false);
      } else {
        onClose()

        setShowError(true);
      }
  };

  const carOptions = CarsList.map((car) => {
    return <option key={car.imageURL}>{car.name}</option>;
  });

  const modalSubmit = (e) => {
    e.preventDefault();
    alert("Reservation completed!");
    onClose();
  };

  const carImage = CarsList.map((car) => {
    return <Image src={car.imageURL} alt={car.name}></Image>;
  });

  
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      className="BookRide"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={{ base: 5, md: 24 }}
      p={{ base: 5, sm: 10 }}
      mb={{ base: 24, md: 40 }}
      boxShadow={"dark-lg"}
      rounded={"lg"}
      id="bookRide"
    >
      <Text
        className="BookRide__title"
        fontWeight={"bold"}
        fontSize={{ base: "xl", sm: "3xl" }}
        mb={5}
      >
        Book ride
      </Text>
      {showError && (
        <Text
          className="error"
          fontWeight={"bold"}
          border={"2px solid red"}
          width={"100%"}
          textAlign={"center"}
          p={2}
          mb={2}
          letterSpacing={"2px"}
          fontSize={"xl"}
          color={"white"}
          backgroundColor={"red.500"}
          borderRadius={"xl"}
        >
          Complete all the fields!
        </Text>
      )}

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
          onClick={onOpen}
        >
          Search
        </Button>

        <Modal
          className={"modal"}
          isOpen={isOpen}
          onClose={onClose}
          size={"2xl"}
        >
          <ModalOverlay />
          <ModalContent className="modal__content">
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>

            <ModalBody
              className="reservation"
            >
              <form id="new-note" onSubmit={modalSubmit}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  align={"center"}
                  as={"h1"}
                  mt={"5"}
                  mb={"14"}
                  color={"red.500"}
                >
                  Complete the reservation
                </Text>

                <Box
                  className="reservation__box"
                  display={"grid"}
                  gridTemplateColumns={{base:'1fr', md: '1fr 1fr'}}
                  gap={"10"}
                  mb={"14"}
                >
                  <Flex
                    className="reservation__details"
                    flexDirection={"column"}
                  >
                    <Text mb={""} color={"red.500"}>
                      Location & Date
                    </Text>

                    <Flex className="details__time" flexDir={"column"}>
                      <Box className="time__pick">
                        <Text
                          mt={5}
                          mb={2}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <BiTime /> Pick Up Time{" "}
                          <Text
                            as={"span"}
                            fontSize={"sm"}
                            color={"red.500"}
                            ml={"2"}
                          >
                            {book.pickDate}
                          </Text>
                        </Text>
                        <Text display={"flex"} fontSize={"md"}>
                          <Input type="time" />{" "}
                        </Text>
                      </Box>

                      <Box className="time__drop">
                        <Text
                          mt={5}
                          mb={2}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <BiTime /> Drop Off Time{" "}
                          <Text
                            as={"span"}
                            fontSize={"sm"}
                            color={"red.500"}
                            ml={"2"}
                          >
                            {book.dropDate}
                          </Text>
                        </Text>
                        <Text display={"flex"}>
                          <Input type="time" />{" "}
                        </Text>
                      </Box>

                      <Box className="location__pick">
                        <Text
                          mt={5}
                          mb={2}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <CiLocationOn /> Pick Up Location
                        </Text>
                        <Text color={"red.500"}>{book.pickLocation}</Text>
                      </Box>

                      <Box className="location__drop">
                        <Text
                          mt={5}
                          mb={2}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <CiLocationOn />
                          Drop Off Location
                        </Text>
                        <Text color={"red.500"}>{book.dropLocation}</Text>
                      </Box>
                    </Flex>
                  </Flex>

                  <Box className="reservation__car">
                    <Text>
                      Car -{" "}
                      <Text as={"span"} color={"red.500"}>
                        {" "}
                        {book.car}{" "}
                      </Text>
                    </Text>
                    <Image
                      className="car__image"
                      src={selectedCarImage}
                      alt={book.car}
                      borderRadius={"xl"}
                    />
                  </Box>
                </Box>

                <Flex className="reservation__flex" flexDirection={"column"}>
                  <Text
                    align={"center"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                    mb={10}
                    color={"red.500"}
                  >
                    Personal information
                  </Text>

                  <Box className="flex__box-1">
                    <FormControl mb={"5"}>
                      <FormLabel>
                        First Name{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="text" placeholder="Enter your first name" />
                    </FormControl>

                    <FormControl mb={"5"}>
                      <FormLabel>
                        Last Name{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="text" placeholder="Enter your last name" />
                    </FormControl>

                    <FormControl mb={"5"}>
                      <FormLabel>
                        Phone Number{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="number" placeholder="Enter your phone" />
                    </FormControl>

                    <FormControl mb={"5"}>
                      <FormLabel>
                        Age{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="number" placeholder="Enter your age" />
                    </FormControl>
                  </Box>

                  <Box className="flex__box-2">
                    <FormControl mb={"5"}>
                      <FormLabel>
                        Email{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="text" placeholder="Enter your Email" />
                    </FormControl>

                    <FormControl mb={"5"}>
                      <FormLabel>
                        Adress{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="text" placeholder="Enter your adress" />
                    </FormControl>

                    <FormControl mb={"5"}>
                      <FormLabel>
                        City{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="text" placeholder="Enter your city" />
                    </FormControl>

                    <FormControl mb={"5"}>
                      <FormLabel>
                        Zip Code{" "}
                        <Text as={"span"} color={"red.500"} fontSize={"2xl"}>
                          *
                        </Text>
                      </FormLabel>
                      <Input type="number" placeholder="Enter your zip code" />
                    </FormControl>
                  </Box>
                </Flex>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button
                backgroundColor={"red.500"}
                color={"white"}
                _hover={{
                  backgroundColor: "red.600",
                }}
                type="submit"
                form="new-note"
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>
    </Flex>
  );
};

export default BookRide;
