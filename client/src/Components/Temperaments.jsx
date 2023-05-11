import React from 'react'
import Temperament from './Temperament'

export default function Temperaments(props) {
    const { temperaments, pageNumber } = props;
  return (
    <div>
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
