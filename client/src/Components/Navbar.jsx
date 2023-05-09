import React from 'react'
import NavbarButton from './AuxButtons/NavbarButton';
import home from '../images/home.svg';
import paw from '../images/paw.svg';
import './Styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <NavbarButton action={'Home'} image={home} />
        <NavbarButton action={'Temperaments'} image={paw} />
        <button className='navbar-button'>Search</button>
        <input className='navbar-input' type="text" placeholder="German shepard" />
    </div>
  )
}
