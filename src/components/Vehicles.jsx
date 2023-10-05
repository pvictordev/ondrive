import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Grid,
  Center,

} from "@chakra-ui/react";
import CarsList from '../Data/CarsList';
import VehiclesBox from './VehiclesBox';

const Vehicles = () => {

  const [active, setActive] = useState("first");

  // const vehicles = CarsList.map(car => {
  //   return(
  //     // <Stack alignContent={'center'} key={car.id}>
  //     // <Text>{car.name}</Text>
  //     //   <Stack direction="column">
  //     //     <Text>{car.model}</Text>
  //     //     <Text>{car.mark}</Text>
  //     //     <Text>{car.year}</Text>
  //     //     <Text>{car.doors}</Text>
  //     //     <Text>{car.transmission}</Text>
  //     //     <Text>{car.fuel}</Text>
  //     //     <Text>${car.price}</Text>
  //     //     <Text>{car.year}</Text>
  //     //   </Stack>
  //     // </Stack>

  //     <VehiclesBox
  //       key={car.id}
  //       {...car}
  //     />
  //   )
  // })
  
  
  return (
    <Box as="section" className="pick-section">
    <Container maxW="container.lg">
      <Box className="pick-container">
        <Box className="pick-container__title">
          <Heading as="h3" fontSize="xl">
            Vehicle Models
          </Heading>
          <Heading as="h2" fontSize="4xl">
            Our rental fleet
          </Heading>
          <Text>
            Choose from a variety of our amazing vehicles to rent for your
            next adventure or business trip
          </Text>
        </Box>
        <Grid className="pick-container__car-content" gridTemplateColumns={'repeat(3,1fr)'} >
          <Flex className="pick-box" flexDirection={'column'}>
            <Button
              onClick={() => setActive("first")}
            >
              {CarsList[0].name}
            </Button>
            <Button
              onClick={() => setActive("second")}
             
            >
              {CarsList[1].name}
              
            </Button>
            <Button
              onClick={() => setActive("third")}
            >
              {CarsList[2].name}

            </Button>
            <Button
              onClick={() => setActive("fourth")}
            >
              {CarsList[3].name}

            </Button>
            <Button
              onClick={() => setActive("fiveth")}
            >
              {CarsList[4].name}
              
            </Button>
            <Button
               onClick={() => setActive("sixth")}
            >
              {CarsList[5].name}
              
            </Button>
          </Flex>
          <Center>
          <Box className='pick-img'>
            {active == 'first' && <img src={CarsList[0].imageURL} alt="" />}
            {active == 'second' && <img src={CarsList[1].imageURL} alt="" />}
            {active == 'third' && <img src={CarsList[2].imageURL} alt="" />}
            {active == 'fourth' && <img src={CarsList[3].imageURL} alt="" />}
            {active == 'fiveth' && <img src={CarsList[4].imageURL} alt="" />}
            {active == 'sixth' && <img src={CarsList[5].imageURL} alt="" />}

          </Box>
          </Center>
          <Box className="pick-box__car">
            {active == 'first' && <VehiclesBox {...CarsList[0]} />}
            {active == 'second' && <VehiclesBox {...CarsList[1]} />}
            {active == 'third' && <VehiclesBox {...CarsList[2]} />}
            {active == 'fourth' && <VehiclesBox {...CarsList[3]} />}
            {active == 'fiveth' &&  <VehiclesBox {...CarsList[4]} />}
            {active == 'sixth' && <VehiclesBox {...CarsList[5]} />}

          </Box>

        </Grid>

      </Box>
    </Container>
  </Box>
  )
}

export default Vehicles
