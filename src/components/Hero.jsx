import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Hero() {

  return (
    <Container maxW={'7xl'} p='12'>
        <Stack
           align={'center'}
           spacing={{ base: 8, md: 10 }}
           py={{ base: 10, md: 23 }}
           direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading 
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                fontSize={'6xl'}
                fontWeight={'bold'}
              >
                <Text as={'span'} color={'red'}>Save</Text> your money with our car <Text as={'span'} color={'red'}>rental</Text>
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'}> Rent the car of your dreams for a few days or even a few hours and enjoy the ride.</Text>

            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={useColorModeValue('red.500', 'red.700')}
                _hover={{ bg: 'red.600' }}
              >Book ride
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
              >Learn more
              </Button>
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Image align={'center'}
              w={'100%'}
              h={'100%'} src='src/images/car.png'/>
          </Flex>
        </Stack>
     
    </Container>
  )
}





