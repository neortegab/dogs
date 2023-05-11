import React from 'react'
import Temperament from './Temperament'
import './Styles/Temperaments.css'

export default function Temperaments(props) {
    const { temperaments, pageNumber } = props;
  return (
    <div className='temperaments-container'>
        { temperaments && 
          temperaments.slice(
            (pageNumber === 1 ? 0 : pageNumber*8), 
            (pageNumber === 1 ? 8 : (pageNumber+1)*8)
          ).map(temperament => 
          <Temperament key={temperament?.id} 
            name={temperament?.name} 
          />)
        }
    </div>
  )
}
