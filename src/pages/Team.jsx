import React from 'react'
import TeamMember from '../Data/TeamMember'
import TeamCard from '../components/TeamCard'

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
    <div>{cards}</div>
    
  )
}

export default Team
