import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/DogCard.css'

export default function DogCard(props) {

    const { dog } = props; 

  return (
    <Link to={`/dog/${dog?.id}`}>
      <div className='dog-card'>
        <h2 className='dog-text-title'>{dog?.name}</h2>
        <img className='dog-img' src={dog?.image?.url} alt={dog?.name} />
        <div className='dog-temperament-container'>
          <h3 className='dog-text-temperament-title '>Temperaments:</h3>
          <p className='dog-text-content'>{dog?.temperament}</p>
        </div> 
      </div>
    </Link>   
  )
}
