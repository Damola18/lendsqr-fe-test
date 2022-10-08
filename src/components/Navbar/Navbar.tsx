import React from 'react'

// style imports
import "./navbar.scss"

// page imports 
import Search from "../Search/Search"
// assets imports
import logo from "../../assets/images/logo.svg"
const Navbar = () => {
  return (
    <div className='nav'>
        <img src = {logo} className='logo' alt="" />

        <Search/>

        <div className="info">

        </div>

    </div>
  )
}

export default Navbar