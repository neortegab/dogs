import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getDogByName } from '../redux/actions/actions';
import NavbarButton from './AuxButtons/NavbarButton';
import home from '../images/home.svg';
import paw from '../images/paw.svg';
import './Styles/Navbar.css'

export default function Navbar() {

  const { pathname } = useLocation();

  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setName(e.target.value);
  }

  const handleSearch = () => {
    dispatch(getDogByName(name))
  }  

  return (
    <div className='navbar-container'>
        <Link to='/home'>
          <NavbarButton action={'Home'} image={home} />
        </Link>
        <Link to='/temperaments'>
          <NavbarButton action={'Temperaments'} image={paw} />
        </Link>
        { (pathname === '/home' || pathname === '/temperaments') && 
          <div className='navbar-searchbar'> 
            <button className='navbar-button' onClick={handleSearch}>Search</button>
            <input className='navbar-input' type="text" placeholder="German shepard" value={name} onInput={handleInput}/> 
          </div> 
        }
    </div>
  )
}
