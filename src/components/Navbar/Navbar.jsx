import React from 'react'
import './navbar.css'
import search_icon from '../../assets/Public/icons8-search.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
         <h1 className='logo'>NetChill</h1>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse Language</li>
        </ul>
        
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icon' /></div> 
    </div>
  )
}

export default Navbar