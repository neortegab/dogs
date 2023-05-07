import React from 'react'
import NavbarButton from './AuxButtons/NavbarButton';
import home from '../images/home.svg';
import paw from '../images/paw.svg';

export default function Navbar() {
  return (
    <div>
        <NavbarButton action={'Home'} image={home} />
        <NavbarButton action={'Temperaments'} image={paw} />
        <button>Search</button>
        <input type="text" placeholder="German shepard" />
    </div>
  )
}
