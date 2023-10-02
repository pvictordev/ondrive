import React from 'react'
import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import { BiSolidLogIn, } from 'react-icons/bi'
import { AiFillCar, } from 'react-icons/ai'



const Feature = ({ title, text, icon }) => {
    return (
      <Stack align={'center'}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'red.500'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    )
  }
const RentSteps = () => {
  return (
    <Box py={10} px={14} align={'center'}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
                icon={<Icon as={BiSolidLogIn} w={10} h={10} />}
                title={'Sign up / Login in'}
                text={' It allows you to manage your reservations easily. You can view, modify, or cancel your bookings without having to re-enter your information each time.'}
            />
            <Feature
                icon={<Icon as={AiFillCar} w={10} h={10} />}
                title={'Select car'}
                text={'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs'}
            />
            <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={'Contact Operator'}
                text={'Our knowledgeable and friendly operators are always ready to help with any questions or concerns'}
            />
        </SimpleGrid>
    </Box>
  )
}

export default RentSteps
