import React from 'react'
import ActionButton from './AuxButtons/ActionButton'
import { Link } from 'react-router-dom'
import './Styles/Landing.css'

export default function Landing() {
  return (
    <div className='landing-container'>
      <div>
        <h1 className='landing-text'>Welcome!</h1>
        <Link to='/home'>
          <ActionButton action='Go to Home'/>
        </Link>
      </div>
    </div>
  )
}
