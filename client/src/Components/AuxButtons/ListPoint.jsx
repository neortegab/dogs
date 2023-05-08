import React from 'react'
import pagePoint from '../../images/pagePoint.svg'

export default function ListPoint(props) {

    const { pageNumber } = props;

  return (
    <div>
        <img src={pagePoint} alt={pageNumber}/>
        <p>{pageNumber}</p>
    </div>
  )
}
