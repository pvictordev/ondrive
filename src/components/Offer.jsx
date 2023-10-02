import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

import {MdPriceCheck} from 'react-icons/md'; 
import {AiOutlineWifi, AiOutlineFileAdd} from 'react-icons/ai';


const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('red.500', 'red.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        
      </Stack>
    </Box>
  )
}

const Offer = () => {
  return (
    <Box p={4}>
    <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        What we offer
      </Heading>
      <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
      Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
      </Text>
    </Stack>

    <Container maxW={'5xl'} mt={12}>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Card
          heading={'Transparency'}
          icon={<Icon as={MdPriceCheck} w={10} h={10} />}
          description={'Enjoy your car with our no hidden charges policy. We believe in transparent and honest pricing.'}
          href={'#'}
        />
        <Card
          heading={'Online Booking'}
          icon={<Icon as={AiOutlineWifi} w={10} h={10} />}
          description={'Our online booking service allows customers to reserve their vehicles in advance from the comfort of their homes.'}
          href={'#'}
        />
        <Card
          heading={'Additional Services'}
          icon={<Icon as={AiOutlineFileAdd} w={10} h={10} />}
          description={'We offer additional services you offer, such as GPS rental, child safety seats, or insurance options.'}
          href={'#'}
        />
      </Flex>
    </Container>
  </Box>
  )
}

export default Offer
