import React from 'react'
import paw from '../../images/paw.svg'
import '../Styles/ActionButton.css'

export default function ActionButton(props) {
    const { action, onClick } = props;
  return (
    <div className='action-button' onClick={onClick}>
        <p className='action-name'>{action}</p>
        <img className='action-image' src={paw} alt={action}/>
    </div>
  )
}
