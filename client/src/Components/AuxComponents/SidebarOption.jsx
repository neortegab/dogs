import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { orderDogsName, orderDogsWeight, orderTemperaments} from '../../redux/actions/actions'
import '../Styles/SidebarOption.css'

export default function SidebarOption(props) {
    const { name } = props;

    const { pathname } = useLocation();

    const possibleNames = {
      'Alphabetically': orderDogsName,
      'Weight': orderDogsWeight
    }

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
      if(pathname === '/temperaments' && name === 'Alphabetically')  dispatch(orderTemperaments(e.target.value));
      dispatch(possibleNames[name](e.target.value))
    }

  return (
    <div className='sidebar-option-container'>
        <h4 className='sidebar-option-title'>{name}</h4>
            <select className='sidebar-option' onChange={handleOnChange}>
                <option value="ascendant">Ascending</option>
                <option value="descendant">Descending</option>
            </select>
    </div>
  )
}
