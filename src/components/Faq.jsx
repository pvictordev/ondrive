import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading, 
  Stack,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const Faq = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexDirection={'column'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      rowGap={10}
    >

    <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}  rowGap={10}>
      <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        Frecvently Asked Questions
      </Heading>
      <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
      Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
      </Text>
    </Stack>

    <Container>
      <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}>
            <Text fontSize="md">How old do I need to be to rent a car ?</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
            You typically need to be at least 21 years old to rent a car. Some rental companies may have a minimum age requirement of 25.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}>
            <Text fontSize="md">What documents do I need to rent a car?</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              You will typically need a valid driver's license, a major credit card in your name, and sometimes an additional form of identification like a passport.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}>
            <Text fontSize="md"> Do I need insurance when renting a car?</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              Most rental companies offer optional insurance coverage, but it's advisable to check if your existing auto insurance or credit card offers rental car coverage. This can help you avoid purchasing unnecessary insurance.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}>
            <Text fontSize="md">What should I do in case of an accident or breakdown?</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              In the event of an accident, contact local authorities and the rental company immediately. They will provide guidance on how to proceed. Most rental cars come with roadside assistance for breakdowns.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}>
            <Text fontSize="md">What should I do in case of an accident or breakdown?</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              In the event of an accident, contact local authorities and the rental company immediately. They will provide guidance on how to proceed. Most rental cars come with roadside assistance for breakdowns.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Flex>

  )
}

export default Faq
