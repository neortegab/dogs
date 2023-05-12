import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearFilter } from '../redux/actions/actions'
import SidebarOption from './AuxComponents/SidebarOption'
import ActionButton from './AuxButtons/ActionButton'
import './Styles/Sidebar.css'

export default function Sidebar() {

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(clearFilter());
  } 

  return (
    <div className='sidebar-container'>
        <h1 className='sidebar-title'>Options</h1>
        <h2 className='sidebar-subtitle'>Sort</h2>
        <SidebarOption name='Alphabetically'/>
        { pathname !== '/temperaments' && <SidebarOption name='Weight'/> }
        <div className='sidebar-reset-button'>
          <ActionButton action='Reset' onClick={handleReset}/>
        </div>
        <h2 className='sidebar-subtitle'>Filters</h2>
        <div>
          <select>
            {/* Map temperaments for the options */}
          </select>
        </div>
        <h2 className='sidebar-subtitle'>List actions</h2>
        <div className='sidebar-buttons-list'>
            <ActionButton action='Add'/>
        </div>
    </div>
  )
}
