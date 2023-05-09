import React from 'react'

export default function FilterButton(props) {

    const { breed } = props;

  return (
    <div>
        <h3>
            {breed}
        </h3>
        <button>X</button>
    </div>
  )
}
