import React from 'react'
import '../Styles/FilterButton.css'

export default function FilterButton(props) {

    const { breed } = props;

  return (
    <div className='filter-button'>
        <h3>
            {breed}
        </h3>
        <button>X</button>
    </div>
  )
}
