import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function HomeRoute(props) {
  return (
    <Box ml={20} mt={5} mb={24}>
      <Text fontSize={'4xl'} fontWeight={'bold'}>{props.title}</Text>
      <Text fontSize={'xl'} fontWeight={'semibold'}><Text as={'span'} _hover={{ color: 'red.500' }}><Link to={'/'}>Home</Link></Text> / {props.title}</Text>
    </Box>
  )
}
