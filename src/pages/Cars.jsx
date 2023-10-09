import React from 'react'
import CarsCard from '../components/CarsCard'
import CarsList from '../Data/CarsList'
import { Grid, useMediaQuery, Box, Text  } from '@chakra-ui/react'
import HomeRoute from '../components/HomeRoute'
import Banner from '../components/Banner'
import RentSteps from '../components/RentSteps'


const Cars = () => {

  const cars = CarsList.map(car => {
    return(
      <CarsCard
        key={car.id}
        {...car}
      />
    )
  })
  const [isLargerThanMobile] = useMediaQuery('(min-width: 890px)')
  return (
    <Box>
    <HomeRoute title={'Cars'}/>

    <Grid 
    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
    templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(2, 1fr)" }}
    rowGap={10} 
    columnGap={0}
    p={50} 
    >
      {cars}
    </Grid>
    
    <Banner/> 
    <RentSteps/>

    </Box>
  )
}

export default Cars
