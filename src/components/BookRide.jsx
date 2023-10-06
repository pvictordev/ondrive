import React, {useState} from 'react'
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
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'


const BookRide = () => {  
 
  return (
    <Flex className="book-ride" flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pb={5}>
      <Text >Book a ride</Text>
      <Grid gridTemplateColumns={'repeat(3,1fr)'} gap={10}>

        <FormControl>
          <FormLabel>Select your car </FormLabel>
          <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
        </FormControl>
        
        <FormControl>
          <FormLabel>Select your car</FormLabel>
          <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select your car</FormLabel>
          <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select your car</FormLabel>
          <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select your car</FormLabel>
          <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
        </FormControl>

        <Button></Button>

      </Grid>
    </Flex>
  )
}

export default BookRide
