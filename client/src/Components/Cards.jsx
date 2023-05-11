import React from 'react'
import DogCard from './DogCard'
import './Styles/Cards.css'

export default function Cards(props) {

  const { dogs, pageNumber } = props;

  return (
    <div className='cards-container'>
        { dogs && 
          dogs.slice(
            (pageNumber === 1 ? 0 : pageNumber*8), 
            (pageNumber === 1 ? 8 : (pageNumber+1)*8)
          ).map(dog => 
          <DogCard key={dog.id} 
          dog={dog} 
          />)
        }
    </div>
  )
}
