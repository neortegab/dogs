import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../redux/actions/actions'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cards from './Cards'
import PageList from './PageList'
import './Styles/Home.css'

export default function Home() {

  const { filteredDogs } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);


  return (
    <div>
        <Navbar />
        <div className='content-container'>
          <div className='content-sidebar'>
            <Sidebar />
          </div>
          <div className='content-dogs'>
            <Cards dogs={filteredDogs} pageNumber={1} />
            <PageList />
          </div>
        </div>
    </div>
  )
}
