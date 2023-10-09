import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export default function Banner() {
  return (
    <Flex bg={'#2f2e2f'} color={'white'} flexDir={'column'} my={'24'}  p={16} justifyContent={'center'} alignItems={'center'}>
      <Text fontSize={'7xl'} mb={2} fontWeight={'bold'}>Save your cash and never crash !</Text>
      <Text fontSize={'2xl'} fontWeight={'normal'} letterSpacing={'wider'}><Text as={'span'} color={'red.500'}>Better</Text> than competitors, we have that they don't</Text>
    </Flex>
  )
}
