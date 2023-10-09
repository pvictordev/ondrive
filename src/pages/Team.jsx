import React from 'react'
import TeamMember from '../Data/TeamMember'
import TeamCard from '../components/TeamCard'
import { Grid, useMediaQuery, Box  } from '@chakra-ui/react'
import HomeRoute from '../components/HomeRoute'
import Banner from '../components/Banner'
import RentSteps from '../components/RentSteps'

const Team = () => {
  const cards = TeamMember.map(member => {
    return(
      <TeamCard
        key={member.id}
        {...member}
      />
    )
  })
  return (
    <Box>
      <HomeRoute title={'Team'}/>
      <Grid 
       templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
       templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(2, 1fr)" }}
      
      p={50} 
      >
        {cards}
      </Grid>

      <Banner/> 
    <RentSteps/>
    </Box>
  )
}

export default Team
