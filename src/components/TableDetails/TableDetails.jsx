import { useState} from "react";
import "./tableDetails.scss"
import {GoKebabVertical} from "react-icons/go";

const TableDetails =  ({details}) => {
    const {orgName, userName, email,id, phoneNumber, createdAt}  = details;
    const [ openKebab,  setOpenKebab] = useState(false);   
    // KEBAB MENU
    const openKebabMenu = (e) => {
        e.preventDefault();
        if(openKebab) {
            setOpenKebab(false)
        }
        else{
            setOpenKebab(true);
        }

    }

    const closeKebabMenu = (e) => {
        e.preventDefault();


    }
    
    function convertDate(){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const merg = new Date().toLocaleDateString("en-US", options);
        const times = new Date().toLocaleTimeString("en-gb", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })
        .toUpperCase();

        return merg + " " + times ;
    }
    var datetime = convertDate(createdAt)

    return (
    
        <tr key={id}>
            <td>{orgName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td> 

             {datetime}
            </td>
            <td>
                <span className='employed'>
                    Null
                </span>
                
            </td>

            <td>
                <button onClick={openKebabMenu} >
                    <GoKebabVertical size="23px" className="img" />
                </button>
                
                { openKebab &&

                    <div className='kebabMenu' onClick={closeKebabMenu}>
                        <a href={`/users/${id}`}> 
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665592489/Lendsqr/icons/Group_1_xmzppd.svg" alt=""/>
                            </span>
                            View Details
                        </a>
                        <a href="/"> 
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665672328/Lendsqr/icons/blacklist_c4ilvj.svg" alt=""/>
                            </span>Blacklist User
                        </a>
                        <a href="/">
                            <span>
                                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665592489/Lendsqr/icons/np_user_2995993_000000_1_bypjbn.svg" alt=""/>
                            </span>
                            Activate User
                        </a>
                    </div>
                }
            </td>
            
        </tr>
    )

}

export default TableDetails;