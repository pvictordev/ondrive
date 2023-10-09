import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import CarsList from '../Data/CarsList';

const VehiclesBox = (props) => {

  
  return (
    <Box>
      <Stack direction="column" fontSize={'xl'}>
        <Text  border={'2px solid '} borderRadius={'xl'} bg={useColorModeValue('red.500', 'red.700')} color={'white'} textAlign={'center'} >${props.price}/ Per day</Text>
        <Text p={'2'} borderBottom={'2px solid red '}>Model: {props.model}</Text>
        <Text p={'2'} borderBottom={'2px solid red'}> Mark: {props.mark}</Text>
        <Text p={'2'}  borderBottom={'2px solid red'}>Year: {props.year}</Text>
        <Text p={'2'}  borderBottom={'2px solid red'}>Doors: {props.doors}</Text>
        <Text p={'2'}  borderBottom={'2px solid red'}>Transmission: {props.transmission}</Text>
        <Text p={'2'}  borderBottom={'2px solid red'}>Fuel: {props.fuel}</Text>
      </Stack>
  </Box>
  )
}

export default VehiclesBox
