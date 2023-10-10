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
  useColorModeValue,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import {AiFillCar, AiOutlineCalendar} from 'react-icons/ai';
import{CiLocationOn} from 'react-icons/ci';
import { m } from 'framer-motion';



const BookRide = () => {  
 
  return (
    <Flex className="BookRide" 
      flexDirection={'column'}
      justifyContent={'center'} 
      alignItems={'center'} 
      // border={'2px solid black'} 
      m={{base:10, md:24}} p={10} 
      mb={{base:24, md:40}}
      boxShadow={'dark-lg'}

    >
      <Text className='BookRide__title' fontWeight={'bold'} fontSize={'3xl'} mb={'10'}>Book ride</Text>
      <Grid 
        className='BookRide__grid'
        gap={10}
        w={'full'} 
        alignItems={'flex-end'}
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(2, 1fr)" }}
        
      >

        <FormControl className='grid__item'>
          <FormLabel display={'flex'} alignItems={'center'} gap={'2'} fontSize={'lg'}>Select your car <AiFillCar/></FormLabel>
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
        
        <FormControl className='grid__item'>
        <FormLabel display={'flex'} alignItems={'flex-start'} gap={'2'} fontSize={'lg'}>Pick place <CiLocationOn/></FormLabel>
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

        <FormControl className='grid__item'>
          <FormLabel display={'flex'} alignItems={'flex-start'} gap={'2'} fontSize={'lg'}>Drop place <CiLocationOn/></FormLabel>
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

        <FormControl className='grid__item'>
        <FormLabel display={'flex'} alignItems={'center'} gap={'2'} fontSize={'lg'}>Pick date <AiOutlineCalendar/></FormLabel>

          <Input type='date'/>
          
        </FormControl>

        <FormControl className='grid__item'>
        <FormLabel display={'flex'} alignItems={'center'} gap={'2'} fontSize={'lg'}>Drop date <AiOutlineCalendar/></FormLabel>

          <Input type='date'/>
        </FormControl>

        <Button className='grid__item' 
          fontSize={'lg'}
          bg={useColorModeValue('red.500', 'red.700')}
          color={'white'}
          _hover={{
            bg: 'red.600',
          }}
        >Search</Button>
        
      </Grid>
    </Flex>
  )
}

export default BookRide
