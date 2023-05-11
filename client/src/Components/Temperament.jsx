import React from 'react'
import dog from '../images/dog.svg'
import './Styles/Temperament.css'

export default function Temperament(props) {
    const { name } = props;
  return (
    <div className='temperament-container'>
        <h1>{ name }</h1>
        <img src={dog} alt={name}/>
    </div>
  )
}
