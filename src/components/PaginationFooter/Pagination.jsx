import React, {useEffect, useState} from 'react'
import "./pagination.scss";

const Pagination = (props) => {
  const {page, setPage, pageCounts, records, setPageCount} = props;
  const [controls, setControls] = useState([])

  const prevControl = () => {
    if(page > 0){
      setPage(page -1 )
    }
  }

  const nextControl = () => {
    if (page < (Math.ceil(records/ pageCounts ) -1 )){
      setPage(page + 1)
    }
  }

  const handleCounts = (e) => {
    setPage(0);
    setPageCount(parseInt(e.target.value))
  }

  useEffect(() => {
    let temps = []
    for(let i = 0; i < Math.ceil(records/pageCounts); i++) {
      temps.push(i);
    }
    setControls(temps);
  }, [pageCounts, records])

  return (
    <div className='pagination'>
      <div className="pageSection">
        <p>Showing</p>
        <select defaultValue={pageCounts} onClick={handleCounts}>
        <option value={5}>5</option>
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
        {controls.slice(1,4).map(item => (
          <button key={item} onClick={() => setPage(item)} className={item === "page" ? "acitve" : "" }>
            {item}
          </button>
        ))}
        {
          (Math.ceil(records/ pageCounts)) > 7 &&
          <span>...</span>
        }
        { 
          controls.length > 7 ?
          controls.slice(controls.length - 1, controls.length).map(item => (
            <button key={item} onClick={()  => setPage(item)} className={item === page ? "acitve" : "" }>
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