import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import CarsList from '../Data/CarsList';

const VehiclesBox = (props) => {

  
  return (
    <Box>
      <Stack direction="column" fontSize={'xl'}>
        <Text  border={'2px solid '} borderRadius={'xl'} textAlign={'center'} >${props.price}/ Per day</Text>
        <Text p={'2'} borderBottom={'2px solid '}>Model: {props.model}</Text>
        <Text p={'2'} borderBottom={'2px solid '}> Mark: {props.mark}</Text>
        <Text p={'2'}  borderBottom={'2px solid '}>Year: {props.year}</Text>
        <Text p={'2'}  borderBottom={'2px solid '}>Doors: {props.doors}</Text>
        <Text p={'2'}  borderBottom={'2px solid '}>Transmission: {props.transmission}</Text>
        <Text p={'2'}  borderBottom={'2px solid '}>Fuel: {props.fuel}</Text>
      </Stack>
  </Box>
  )
}

export default VehiclesBox
