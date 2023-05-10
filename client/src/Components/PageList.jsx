import React from 'react'
import ListPoint from './AuxButtons/ListPoint'
import previous from '../images/previous.svg'
import next from '../images/next.svg'
import './Styles/PageList.css'

export default function PageList() {
  return (
    <div className='pagelist-container'>
      <div className='pagelist-advancer'>
        <p className='pagelist-text'>Previous</p>
        <img src={previous} alt='Previous'/>
      </div>
      <ListPoint pageNumber={1}/>
      <div className='pagelist-advancer'>
        <img src={next} alt='Next'/>
        <p className='pagelist-text'>Next</p>
      </div>
    </div>
  )
}
