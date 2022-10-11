import React from 'react'
// style imports 
import "./search.scss"

// import SearchIcon from "../""
const Search = () => {
  return (
    <div className="searchcontainer">
        <div className="search">
            <input type="text" placeholder="Search for anything" className='search'/>
            <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219551/Lendsqr/icons/search_gecqfw.svg" 
                className="image"
                />
        </div>
    </div>
  )
}

export default Search