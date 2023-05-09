import React from 'react'
import '../Styles/NavbarButton.css'

export default function NavbarButton(props) {
    const { action, image } = props;
  return (
    <div className='nbbutton-container'>
        <h1 className='nbbutton-text'>{action}</h1>
        <img className='nbbutton-img' src={image} alt={action} />
    </div>
  )
}
