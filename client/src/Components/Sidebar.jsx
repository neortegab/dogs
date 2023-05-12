import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter } from '../redux/actions/actions'
import SidebarOption from './AuxComponents/SidebarOption'
import ActionButton from './AuxButtons/ActionButton'
import FilterButton from './AuxButtons/FilterButton'
import './Styles/Sidebar.css'

export default function Sidebar() {

  const { pathname } = useLocation();

  const { allTemperaments } = useSelector(state => state);

  const [ filtersSelected, setFiltersSelected ] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {}, [filtersSelected])

  const handleSelectedFilter = (e) => {
    setFiltersSelected([...filtersSelected, e.target.value])
  }

  const handleOnClose = (breed) => {
    setFiltersSelected([...filtersSelected].filter((breedSelected) => breedSelected !== breed))
  }

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
        <div className='sidebar-filter-container'>
          <div className='sidebar-filtering-buttons'>
            {filtersSelected && filtersSelected.map((breed, index)=> <FilterButton key={index} breed={breed} onClose={handleOnClose}/>)}
          </div>
          <select onChange={handleSelectedFilter}>
            { allTemperaments && allTemperaments.map(
              (temperament, index) => 
              <option key={index} value={temperament.name}>{temperament.name}</option>
              )
            }
          </select>
        </div>
        <div className='sidebar-reset-button'>
          <ActionButton action='Reset' onClick={handleReset}/>
        </div>
        <h2 className='sidebar-subtitle'>List actions</h2>
        <div className='sidebar-buttons-list'>
            <ActionButton action='Add'/>
        </div>
    </div>
  )
}
