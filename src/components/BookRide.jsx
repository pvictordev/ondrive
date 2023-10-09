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
import {AiFillCar, AiOutlineCalendar} from 'react-icons/ai';
import{GrLocation} from 'react-icons/gr';



const BookRide = () => {  
 
  return (
    <Flex className="book-ride" flexDirection={'column'} justifyContent={'center'} alignItems={'center'} border={'2px solid black'} mx={'24'} my={'24'} p={'10'} borderRadius={'xl'} >
      <Text fontWeight={'bold'} fontSize={'3xl'} mb={'10'}>Book ride</Text>
      <Grid gridTemplateColumns={'repeat(3,1fr)'} gap={10} w={'full'} alignItems={'center'}>

        <FormControl>
          <FormLabel display={'flex'} alignItems={'center'} gap={'2'}>Select your car <AiFillCar/></FormLabel>
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
          <option>CarList</option>
        </Select>
        </FormControl>
        
        <FormControl>
        <FormLabel display={'flex'} alignItems={'flex-start'} gap={'2'}>Pick place <GrLocation/></FormLabel>
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
          <FormLabel display={'flex'} alignItems={'flex-start'} gap={'2'}>Drop place <GrLocation/></FormLabel>
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
        <FormLabel display={'flex'} alignItems={'center'} gap={'2'}>Pick date <AiOutlineCalendar/></FormLabel>

          <Input type='date'/>
          
        </FormControl>

        <FormControl>
        <FormLabel display={'flex'} alignItems={'center'} gap={'2'}>Drop date <AiOutlineCalendar/></FormLabel>

          <Input type='date'/>
        </FormControl>

        <Box>
        <Button>Search</Button>
        </Box>
      </Grid>
    </Flex>
  )
}

export default BookRide
