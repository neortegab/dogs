import React from 'react'

export default function ActionButton(props) {
    const { action } = props;
  return (
    <div>
        <p>{action}</p>
        <img src='../../images/paw.svg' alt={action}/>
    </div>
  )
}
