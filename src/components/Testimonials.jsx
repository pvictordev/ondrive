import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

const Testimonial = (props) => {
  const { children } = props

  return <Box>{children}</Box>
}
const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}
const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}
const TestimonialText = (props) => {
  const { children } = props
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}
const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}


const Testimonials = (props) => {

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.700')}>
      <Container maxW={'7xl'} p={24} as={Stack} spacing={12} >
        <Stack spacing={0} align={'center'} >
          <Heading fontSize={'4xl'} pb={4}>Our Clients Say</Heading>
          <Text fontSize={'lg'} textAlign={'center'}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent >
              <TestimonialHeading>Range of vehicles</TestimonialHeading>
              <TestimonialText>
              I love the variety of vehicles you offer! Whether I need a compact car for city driving or a spacious SUV for a family trip, your company always has the perfect option.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              // src={
              //   'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              // }
              name={'John Doe'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              Your customer service is outstanding. I had an issue with a vehicle once, and your team resolved it promptly, ensuring I wasn't inconvenienced.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              // src={
              //   'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              // }
              name={'Karen Smith'}
              title={'Manager at XYZ Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Affordable Rates</TestimonialHeading>
              <TestimonialText>
              Your company's affordable rates allow me to budget effectively for my trips. I appreciate that I can get quality service without breaking the bank
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              // src={
              //   'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              // }
              name={'Dilan Svenson'}
              title={'Clerk at ABC Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}

export default Testimonials
