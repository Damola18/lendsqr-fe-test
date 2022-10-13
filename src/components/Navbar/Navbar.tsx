import React from 'react'

// style imports
import "./navbar.scss"
import { AiFillCaretDown } from "react-icons/ai"
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='left'>
          <a href="/">
            <img src = "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665389154/Lendsqr/images/logo_n6nigj.svg" className='logo' alt="" />
          </a>
          
          <div className='searchContainer'>
            <input type="text" placeholder="Search for anything" />
            <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219551/Lendsqr/icons/search_gecqfw.svg" alt="icon" className="image"  />
          </div>
        </div>
       

        <div className="right">
            <a> Docs </a>

            <button>
              <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665679379/Lendsqr/icons/notification_ihd3wt.svg" alt="notification"/></button>
            
            
            <div className='person'>
              <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665687395/Lendsqr/icons/avatar_npjwpg.png" alt="" />
              <span>
                  Adedeji
              </span>
              <AiFillCaretDown/>
            </div>
        </div>

    </div>
  )
}

export default Navbar