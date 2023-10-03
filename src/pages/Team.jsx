import React from 'react'
import TeamMember from '../Data/TeamMember'
import TeamCard from '../components/TeamCard'
import { Grid, useMediaQuery  } from '@chakra-ui/react'

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
    <>
    Team adress
    <Grid 
    templateColumns='repeat(3,1fr)'
    
    p={50} 
    >
      {cards}
    </Grid>
    </>
  )
}

export default Team
