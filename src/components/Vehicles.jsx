import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import CarsList from '../Data/CarsList';
import VehicleBox from './VehiclesBox';

const Vehicles = () => {

  const [active, setActive] = useState("first");

  const vehicles = CarsList.map(car => {
    return(
      <VehicleBox
        key={car.id}
        {...car}
      />
    )
  })
  
  
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
              
            >
             {'3'}
            </Button>
            <Button
              
            >
             {'4'}
            </Button>
            <Button
             
            >
              {'5'}
            </Button>
            <Button
              
            >
              {'6'}
            </Button>
          </Box>

          <Box className="pick-box__car">
            {vehicles}
          </Box>

        </Box>

      </Box>
    </Container>
  </Box>
  )
}

export default Vehicles
