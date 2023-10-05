import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,

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
        <Box className="pick-container__car-content">
          <Box className="pick-box">
            <Button
              onClick={() => setActive("first")}
            >
              {'1'}
            </Button>
            <Button
              onClick={() => setActive("second")}
             
            >
              {'2'}
            </Button>
            <Button
              onClick={() => setActive("third")}
            >
             {'3'}
            </Button>
            <Button
              onClick={() => setActive("fourth")}
            >
             {'4'}
            </Button>
            <Button
              onClick={() => setActive("fiveth")}
            >
              {'5'}
            </Button>
            <Button
               onClick={() => setActive("sixth")}
            >
              {'6'}
            </Button>
          </Box>

          <Box className="pick-box__car">
            {active == 'first' && <VehiclesBox {...CarsList[0]} />}
            {active == 'second' && <VehiclesBox {...CarsList[1]} />}
            {active == 'third' && <VehiclesBox {...CarsList[2]} />}
            {active == 'fourth' && <VehiclesBox {...CarsList[3]} />}
            {active == 'fiveth' &&  <VehiclesBox {...CarsList[4]} />}
            {active == 'sixth' && <VehiclesBox {...CarsList[5]} />}

          </Box>

        </Box>

      </Box>
    </Container>
  </Box>
  )
}

export default Vehicles
