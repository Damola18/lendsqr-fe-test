import React from 'react'
import {GrSearch} from "react-icons/gr"
// style imports 
import "./search.scss"

const Search = () => {
  return (
    <div className="searchcontainer">
        <div className="search">
            <input type="text" placeholder="Search for anything"/>
            <button className="search-btn">
                <span><GrSearch/></span>
            </button>
        </div>
    </div>
  )
}

export default Search