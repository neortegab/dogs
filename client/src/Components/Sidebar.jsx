import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter, filterDogsByTemperaments } from '../redux/actions/actions'
import SidebarOption from './AuxComponents/SidebarOption'
import ActionButton from './AuxButtons/ActionButton'
import FilterButton from './AuxButtons/FilterButton'
import './Styles/Sidebar.css'

export default function Sidebar() {

  const { pathname } = useLocation();

  const { allTemperaments } = useSelector(state => state);

  const [ filtersSelected, setFiltersSelected ] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(filtersSelected.length > 0) dispatch(filterDogsByTemperaments(filtersSelected))
    else dispatch(clearFilter());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersSelected])

  const handleSelectedFilter = (e) => {
    setFiltersSelected([...filtersSelected, e.target.value]);
  }

  const handleOnClose = (breed) => {
    setFiltersSelected([...filtersSelected].filter((breedSelected) => breedSelected !== breed))
  }

  const handleReset = () => {
    dispatch(clearFilter());
    setFiltersSelected([]);
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
          <h4 className='sidebar-option-text'>Temperaments</h4>
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
        { pathname === '/home' && 
          <div className='sidebar-listactions-container'>
            <h2 className='sidebar-subtitle'>List actions</h2>
              <div className='sidebar-buttons-list'>
                <Link to='/createDog'>
                  <ActionButton action='Add'/>
                </Link>
              </div>
          </div>
        }
    </div>
  )
}
