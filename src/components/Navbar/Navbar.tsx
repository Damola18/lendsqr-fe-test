import React from 'react'

// style imports
import "./navbar.scss"

// page imports 
import Search from "../Search/Search"
const Navbar = () => {
  return (
    <div className='nav'>
        <img src = "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665389154/Lendsqr/images/logo_n6nigj.svg" className='logo' alt="" />

        <Search/>

        {/* <div className="info">
            <p> Docs </p>

            <div>
            <span>
                <img src = "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219471/Lendsqr/icons/switch_lpvjfz.svg" alt="" />
            </span>
            </div>
            <div>
            <span>
                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219471/Lendsqr/icons/switch_lpvjfz.svg" alt="" />
            </span>
            </div>
          
        </div> */}

    </div>
  )
}

export default Navbar