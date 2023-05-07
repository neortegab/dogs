import React from 'react'

export default function DogCard(props) {

    const { breed, image, height, weight } = props; 

  return (
    <div>
        <h1>{breed}</h1>
        <img src={image} alt={breed} />
        <h3>Height: </h3>
        <h4>{height}</h4>
        <h3>Weight: </h3>
        <h4>{weight}</h4> 
    </div>
  )
}
