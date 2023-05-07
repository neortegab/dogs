import React from 'react'

export default function DogCard(props) {

    const { breed, image, temperaments } = props; 

  return (
    <div>
        <h1>{breed}</h1>
        <img src={image} alt={breed} />
        <h3>Temperaments: </h3>
        <h4>{temperaments.join(', ')}</h4> 
    </div>
  )
}
