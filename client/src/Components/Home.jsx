import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cards from './Cards'
import PageList from './PageList'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Cards />
        <Sidebar />
        <PageList />
    </div>
  )
}
