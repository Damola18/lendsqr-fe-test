// components imports
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/SidebarDetails/Sidebar'
import TableData from '../../components/UserDataTable/TableData'

// import countriesData from "../../data/countries.js"
// style imports
import "./user.scss"

const userDataContent = [ 
  {
    img:"https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219478/Lendsqr/icons/users_ly86vq.svg",
    title:"USERS",
    number:"2,543"
  },
  {
    img:"https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219477/Lendsqr/icons/active_users_d6jvvw.svg",
    title:"ACTIVE USERS",
    number:"2,543",
  },
  {
    img:"https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219475/Lendsqr/icons/user_loans_dkfytg.svg",
    title:"USERS WITH LOANS",
    number:"12,453"
  },
  {
    img:"https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219480/Lendsqr/icons/user_savings_p4in7p.svg",
    title:"USERS WITH SAVINGS",
    number:"102,453"
  },
]

const UserDataContainer = () => {
  return (
    <div className="userheader">
      { userDataContent.map( user => (
        <div className='card' key={user.img}>
          <img src={user.img} alt="user_icon"/>
          <p className='text'>{user.title}</p>
          <p className='num'>{user.number}</p>
        </div>
      ))}
    </div>
  )
}


const User = () => {
 // const [countries] = useState([...countriesData])
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <div className="userContainer">
            <h1>Users</h1>

            <UserDataContainer/>

            <TableData />
        </div>
    </>
    
  )
}

export default User