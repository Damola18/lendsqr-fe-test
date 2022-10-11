import React, {useEffect, useState} from 'react'
import "./pagination.scss";
const Pagination = (props) => {
  const {page, setPage, pagesCount, records, setPagesCount} = props;
  const [controls, setControls] = useState([])

  const prevControl = () => {
    if(page > 0){
      setPage(page -1 )
    }
  }

  const nextControl = () => {
    if (page < (Math.ceil(records/ pagesCount ) -1 )){
      setPage(page + 1)
    }
  }

  const handleCounts = (e) => {
    setPage(0);
    setPagesCount(parseInt(e.target.value))
  }

  useEffect(() => {
    let temps = []
    for(let i = 0; i < Math.ceil(records/ pagesCount); i++) {
      temps.push(i);
    }
    setControls(temps);
  }, [pagesCount, records])
  return (
    <div className='pagination'>
      <div className="pageSection">
        <p>Showing</p>
        <select defaultValue={pagesCount} onClick={handleCounts}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p>out of {records}</p>
      </div>

      <div className='controls'> 
        <button onClick={prevControl}>
          <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665371976/Lendsqr/icons/prev-icon_red3cz.svg" alt="prev"/>
        </button>
        {controls.slice(0,3).map(item => (
          <button key={item} onClick={() => setPage(item)} className={item === "page" ? "acitve" : "" }>
            {item}
          </button>
        ))}
        {
          (Math.ceil(records/ pagesCount)) > 5 &&
          <span>...</span>
        }
        { 
          controls.length > 5 ?
          controls.slice(controls.length - 3, controls.length).map(item => (
            <button key={item} onClick={()  => setPage(item)} className={item === "page" ? "acitve" : "" }>
              {item}
            </button>
          ))
          : ""
        }
        <button onClick={nextControl}>
          <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665371976/Lendsqr/icons/next-icon_qigcja.svg" alt="next"/>
        </button>
      </div>

    </div>
  )
}

export default Pagination