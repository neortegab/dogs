import React from 'react'
import pagePoint from '../../images/pagePoint.svg'
import '../Styles/ListPoint.css'

export default function ListPoint(props) {

    const { pageNumber } = props;

  return (
    <div className='listpoint-container'>
        <img className='listpoint-img' src={pagePoint} alt={pageNumber}/>
        <p className='listpoint-number'>{pageNumber}</p>
    </div>
  )
}
