import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

const VehiclesBox = (props) => {
  
  return (
    <Stack align={'center'} direction={'row'} >
      <div>     
        {props.name}
      </div>
      <div>     
        {props.model}
        {props.mark}
        {props.year}
        {props.doors}
        {props.transmission}
        {props.fuel}
        ${props.price}
        {props.year}
      </div>

    </Stack>
  )
}

export default VehiclesBox
