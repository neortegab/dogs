import React from 'react'
import '../Styles/FilterButton.css'

export default function FilterButton(props) {

    const { breed, onClose } = props;

    const handleOnClose = () => {
        onClose(breed);
    }

  return (
    <div className='filter-button'>
        <h3>
            {breed}
        </h3>
        <button onClick={handleOnClose}>X</button>
    </div>
  )
}
