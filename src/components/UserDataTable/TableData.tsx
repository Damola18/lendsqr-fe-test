import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./tableData.scss"

import { BASE_URL } from '../../config/api'
import Pagination from '../PaginationFooter/Pagination'

const TableData = () => {

    const [ tableDetails, setTableDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [ error, setError] = useState(false);
    const [pageCounts , setPageCounts] = useState(20);
    const [records, setRecords ] = useState(0)
    const [page, setPage] = useState(0)

    let tableData;
    

    const getData = async function() {
        try {
            await axios.get(BASE_URL)
            .then(res => {
                tableData = res?.data;
                setTableDetails(tableData)
                console.log(tableDetails);

            })
            setLoading(true);
        }

        catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        getData();   
    },[getData])

    return (
        <div className='tableData'>
            
            <table>
                <thead>
                    <tr>
                        <th className='header'>
                           
                            ORGANIZATION
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665281754/Lendsqr/icons/Filter_ynuuji.svg" alt=''/>
                            </span>
                        </th>
                        <th>
                            USERNAME
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665281754/Lendsqr/icons/Filter_ynuuji.svg" alt=''/>
                            </span>
                        </th>
                        <th>
                            EMAIL
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665281754/Lendsqr/icons/Filter_ynuuji.svg" alt=''/>
                            </span>
                        </th>
                        <th>
                            PHONE NUMBER
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665281754/Lendsqr/icons/Filter_ynuuji.svg" alt=''/>
                            </span>
                        </th>
                        <th>
                            DATE JOINED
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665281754/Lendsqr/icons/Filter_ynuuji.svg" alt=''/>
                            </span>
                        </th>
                        <th>
                            STATUS
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665281754/Lendsqr/icons/Filter_ynuuji.svg" alt="" />
                            </span>
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>

                <tbody>
                        {tableDetails.map((item) => (
                            <tr key={item.id}>
                                <td>{item.orgName}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td> 
                                    {item.createdAt}
                                </td>
                                <td>
                                    <span className='employed'>
                                        {item.education.employmentStatus}
                                    </span>
                                    
                                </td>
                                <td>
                                    <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665297681/Lendsqr/icons/ellipsis_yyzybs.svg" alt="" />
                                </td>
                            </tr>
                        ))} 
                </tbody>
            
                <Pagination pageCounts={pageCounts} setPageCounts={setPageCounts} records={tableData} />
            </table>
        </div>
    )
}

export default TableData