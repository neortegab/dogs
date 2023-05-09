import React from 'react'
import './Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <h1 className='sidebar-title'>Options</h1>
        <h2 className='sidebar-subtitle'>Sort</h2>
        <div className='sidebar-option-container'>
            <h4 className='sidebar-option-title'>Alphabetically</h4>
            <select className='sidebar-option'>
                <option value="ascendant">Ascending</option>
                <option value="descendant">Descending</option>
            </select>
            <h4 className='sidebar-option-title'>Weight</h4>
            <select className='sidebar-option'>
                <option value="ascendant">Ascending</option>
                <option value="descendant">Descending</option>
            </select>  
        </div>
        <h2 className='sidebar-subtitle'>Filters</h2>
        <div>
        </div>
        <h2 className='sidebar-subtitle'>List actions</h2>
        <div>
            
        </div>
    </div>
  )
}
