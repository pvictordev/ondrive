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
        className='Team__card'
        key={member.id}
        {...member}
      />
    )
  })
  return (
    <Box className='Team'>
      <HomeRoute className="Team__title" title={'Team'}/>
      <Grid
        className='Team__container' 
       templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
       templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(2, 1fr)" }}
      >
        {cards}
      </Grid>

      <Banner
        className="Team__banner"
        title='Meet Our Team !' textColor="We" description='are the best in the business '
        /> 

      <RentSteps className='Team__steps'/>
    </Box>
  )
}

export default Team
