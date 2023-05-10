import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavbarButton from './AuxButtons/NavbarButton';
import home from '../images/home.svg';
import paw from '../images/paw.svg';
import './Styles/Navbar.css'

export default function Navbar() {

  const { pathname } = useLocation();

  return (
    <div className='navbar-container'>
        <Link to='/home'>
          <NavbarButton action={'Home'} image={home} />
        </Link>
        <Link to='/temperaments'>
          <NavbarButton action={'Temperaments'} image={paw} />
        </Link>
        { pathname === '/home' && 
          <div className='navbar-searchbar'> 
            <button className='navbar-button'>Search</button>
            <input className='navbar-input' type="text" placeholder="German shepard" /> 
          </div> 
        }
    </div>
  )
}
