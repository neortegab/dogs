import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../redux/actions/actions'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cards from './Cards'
import PageList from './PageList'
import './Styles/Home.css'

export default function Home() {

  const { filteredDogs } = useSelector(state => state);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getDogs());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
        <div className='content-container'>
          <div className='content-sidebar'>
            {
              !pathname.includes('/dog') && <Sidebar />
            }
          </div>
          <div className='content-dogs'>
            { 
              pathname === '/home' 
              && <Cards dogs={filteredDogs} pageNumber={1} />
            }
            <PageList />
          </div>
        </div>
    </div>
  )
}
