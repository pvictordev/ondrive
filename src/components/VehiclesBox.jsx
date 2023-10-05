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
  console.log(props.id)
  
  return (
    <>
    <Stack alignContent={'center'}>
    <Text>{props.name}</Text>
    <Stack direction="column">
      <Text>{props.model}</Text>
      <Text>{props.mark}</Text>
      <Text>{props.year}</Text>
      <Text>{props.doors}</Text>
      <Text>{props.transmission}</Text>
      <Text>{props.fuel}</Text>
      <Text>${props.price}</Text>
      <Text>{props.year}</Text>
    </Stack>
  </Stack>
  </>
  )
}

export default VehiclesBox
