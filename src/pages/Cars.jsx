import React from 'react'
import CarsCard from '../components/CarsCard'
import CarsList from '../Data/CarsList'
import { Grid, useMediaQuery  } from '@chakra-ui/react'


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
    <>
    Cars adress

    <Grid 
    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
    templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(2, 1fr)" }}
    rowGap={10} 
    columnGap={0}
    p={50} 
    >
      {cars}
    </Grid>
  
    </>
  )
}

export default Cars
