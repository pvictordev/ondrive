import React, {useState} from 'react'

const VehiclesBox = (props) => {
  
  return (
    <div>
      <div>     
        {props.name}
      </div>
      <div>     
        ${props.price}
      </div>

    </div>
  )
}

export default VehiclesBox
