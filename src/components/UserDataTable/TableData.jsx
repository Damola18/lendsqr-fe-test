import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./tableData.scss"
import { BASE_URL } from '../../config/api';
import Pagination from '../PaginationFooter/Pagination';
import TableDetails from "../TableDetails/TableDetails";
import { BiFilter } from "react-icons/bi";

const TableData = () => {

    const [ tableDetails, setTableDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCounts , setPageCount] = useState(10);
    const [records, setRecords ] = useState(0)
    const [page, setPage] = useState(0)
    const [tableSize, setTableSize] = useState([]);

    let tableData;
    
    const getData = async function() {
        try {
            await axios.get(BASE_URL)
            .then(res => {setTimeout(() => { setLoading(true)  });
                tableData = res?.data;
                setTableDetails(tableData);
                setRecords(tableData.length);
                setTableSize(tableData);
            })
        }

        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getData();   
    },[page, pageCounts])

    const [toggleFilter, setToggleFilter] = useState(false)

    const handleFilter = () => {
        setToggleFilter(!toggleFilter)
    }
    
    return (
       
        <>
             {records > 0 ?
             <>
                <div className='tableData '>
                    {loading ? " " : ""}
                    <table>
                        {/* TABLE HEADER CONTENT */}
                        <thead className='filtercontainer'>
                            <tr>
                                <th>
                                    <button 
                                        className='filter-icon'
                                        onClick={handleFilter}
                                    >
                                        Organization
                                       <span><BiFilter size="30px"/></span> 
                                    </button>
                                    { toggleFilter && 
                                        <div className="filter-section">
                                            <div className="filter">
                                                <label>Organization</label>
                                                <select>
                                                    <option value="">Select</option>
                                                    <option value="Lendsqr">Lendsqr</option>
                                                </select>
                                            </div>
                                            <div className="filter">
                                                <option value="">Username</option>
                                                <input type="text" id='username' placeholder='User' />
                                            </div>
                                            <div className="filter">
                                                <option value="">Email</option>
                                                <input type="text" id='email' placeholder='email'  />
                                            </div>
                                            <div className="filter">
                                                <option value="">Date</option>
                                                <input type="date" id='date' placeholder='mm/dd/yyy' />
                                            </div>
                                            <div className="filter">
                                                <option value="">Phone Number</option>
                                                <input type="text" id='phone' placeholder='Phone Number' />
                                            </div>
                                            <div className="filter">
                                                <label>Status</label>
                                                <select>
                                                    <option value="">Select</option>
                                                    <option value="Nil">Nill</option>
                                                </select>
                                            </div>
                                            <div className="filterbuttons">
                                                <button className="btn"type="reset">Reset</button>
                                                <button className="btn"type="submit">Submit</button>
                                            </div>
                                        </div>
                                    }
                                </th>
                                <th>
                                    <button onClick={handleFilter}  className='filter-icon'>
                                        Username
                                        <span><BiFilter size="30px"/></span>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={handleFilter} className='filter-icon'>
                                        Email
                                        <span><BiFilter size="30px"/></span>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={handleFilter}  className='filter-icon'>
                                        Phone Number
                                        <span><BiFilter size="30px"/></span>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={handleFilter}  className='filter-icon'>
                                        Date Joined
                                        <span><BiFilter size="30px"/></span>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={handleFilter}  className='filter-icon'>
                                        Status
                                        <span><BiFilter size="30px"/></span>
                                    </button>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                    
                        <tbody className="table-body">
                            {tableSize.slice(page * pageCounts, page * pageCounts + pageCounts).map((details) => (
                                <TableDetails details={details} key={details.id} />
                            ))}
                        
                        </tbody>
                    </table>

                </div>
                <div>
                    <Pagination 
                        pageCounts={pageCounts} 
                        setPageCount={setPageCount} 
                        records={records} 
                        page={page} 
                        setPage={setPage}
                    />
                </div>
             </>
                
            : 
                <div className="loader">
                    
                    <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665527548/Lendsqr/icons/loading.._lfpsjd.svg" alt="icon" className="icon"/>
                </div>
             }
        </>
        
    )
}

export default TableData