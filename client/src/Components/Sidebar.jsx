import React from 'react'
import SidebarOption from './AuxComponents/SidebarOption'
import './Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <h1 className='sidebar-title'>Options</h1>
        <h2 className='sidebar-subtitle'>Sort</h2>
        <SidebarOption name='Alphabetically'/>
        <SidebarOption name='Weight'/> 
        <h2 className='sidebar-subtitle'>Filters</h2>
        <div>
        </div>
        <h2 className='sidebar-subtitle'>List actions</h2>
        <div>
            
        </div>
    </div>
  )
}
