import React from 'react'
import ListPoint from './AuxButtons/ListPoint'
import previous from '../images/previous.svg'
import next from '../images/next.svg'

export default function PageList() {
  return (
    <div>
        <p>Previous</p>
        <img src={previous} alt='Previous'/>
        <ListPoint pageNumber={1} />
        <p>Next</p>
        <img src={next} alt='Next'/>
    </div>
  )
}
