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
} from '@chakra-ui/react'

export default function Home() {

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
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}
              >
                Save your money with our car rental
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
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}
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
{/* <Stack
align={'center'}
spacing={{ base: 8, md: 10 }}
py={{ base: 20, md: 28 }}
direction={{ base: 'column', md: 'row' }}
>
<Stack>
 <Heading>
   <Text
     as={'span'}
   >Save your money with our car rental
   </Text>
   <br/>
 </Heading>
 <Text
   as={'span'}>
     Rent the car of your dreams for a few days or even a few hours and enjoy the ride.
 </Text> 

<Stack>
 <Button>
   Book ride
 </Button>
 <Button>
   Learn more
 </Button>
</Stack>

</Stack>

<Flex
justify={'center'}
align={'center'}
position={'relative'}
w={'full'}
>

 <Image
   src='src/images/car.png'
   position={'relative'}
   height={'50%'}
   width={'50%'}
   fit={'cover'}
   align={'center'}
   zIndex={'2'}
 />
 

</Flex> */}




