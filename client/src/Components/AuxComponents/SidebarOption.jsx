import React from 'react'
import '../Styles/SidebarOption.css'

export default function SidebarOption(props) {
    const { name } = props;
  return (
    <div className='sidebar-option-container'>
        <h4 className='sidebar-option-title'>{name}</h4>
            <select className='sidebar-option'>
                <option value="ascendant">Ascending</option>
                <option value="descendant">Descending</option>
            </select>
    </div>
  )
}
