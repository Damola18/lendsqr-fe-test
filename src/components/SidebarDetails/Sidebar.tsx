
import React, {useState} from 'react'


import "./sidebar.scss";


const sidebarMenu = [
  {
    section:"",
    menu: [
      {
        name:"Switch Organization",
        link: "",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219471/Lendsqr/icons/switch_lpvjfz.svg"
      },
      {
        name:"Dashboard",
        link:"/",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219478/Lendsqr/icons/dashboard_cgns92.svg"
      }
    ]
  },

  {
    section: "CUSTOMERS",
    menu: [
      {
        name:"Users",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665227276/Lendsqr/icons/user-friends_1_kn9bfh.svg"
      }, 
      {
        name:"Guarantors",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219459/Lendsqr/icons/Guarantors_sg2sxt.svg"
      },
      {
        name:"Loans",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219459/Lendsqr/icons/loans_j2ns8b.svg"
      },
      {
        name:"Decision Models",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219481/Lendsqr/icons/decision_xo1891.svg"
      }, 
      {
        name:"Savings",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219461/Lendsqr/icons/Savings_ua8zes.svg"
      }, 
      {
        name:"Loan Requests",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219459/Lendsqr/icons/loan_requests_tzywii.svg"
      },
      {
        name:"Whitelist",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219478/Lendsqr/icons/Whitelist_is8oo4.svg"
      }, 
      {
        name:"Karma",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219459/Lendsqr/icons/karma_kaxa4i.svg"
      }
    ]
  },
  {
    section: "BUSINESS",
    menu: [
      {
        name:"Organization",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219471/Lendsqr/icons/switch_lpvjfz.svg"
      }, 
      {
        name:"Loan Products",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219471/Lendsqr/icons/switch_lpvjfz.svg"
      },
      {
        name:"Savings Products",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219461/Lendsqr/icons/Savings_Products_iriwlm.svg"
      },
      {
        name:"Fees and Charges",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219458/Lendsqr/icons/fees_and_charges_jzpi0v.svg"
      },
      {
        name:"Transactions",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219473/Lendsqr/icons/Transactions_bod7cv.svg"
      },
      {
        name:"Services",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219461/Lendsqr/icons/reports_ssqtwc.svg"
      },
      {
        name:"Service Account",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219476/Lendsqr/icons/Service_account_mvjxjy.svg"
      },
      {
        name:"Settlements",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219470/Lendsqr/icons/Settlements_cmeifh.svg"
      },
      {
        name:"Reports",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219461/Lendsqr/icons/reports_ssqtwc.svg"
      }
    ]
  },
  {
    section: "SETTINGS",
    menu: [
      {
        name:"Preferences",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219460/Lendsqr/icons/preferences_yrxvbx.svg"
      },
      {
        name:"Fees and Pricing",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219479/Lendsqr/icons/fees_rbosdb.svg"
      },
      {
        name:"Audit Logs",
        link:"",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665219478/Lendsqr/icons/audits_ltfd9u.svg"
      }, 

      { 
        name: "Systems Messages",
        link: "",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665436452/Lendsqr/icons/tire_1_qh8bkn.svg"
      }
    ]
  }, 

  {
    section: "",
    menu: [
      { 
        name: "Logout",
        link:"/login",
        icon: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665436455/Lendsqr/icons/sign-out_1_xcy2av.svg"
        
      }
    ]
  }
]

// type SidebarProps = {
//   style: React.CSSProperties;
// }

 
// const Sidebar = ({route} : {route:any}) => {
const Sidebar = () => {
  const [search, searchData] = useState();
  return (
    <div className="sidebar">
      {sidebarMenu.map(item => 
        <div className="header" key={item.section}>
          <p>{item.section}</p>
            {item.menu.map( menus => (
              <a href={menus.link} key={menus.name}>
                <img src={menus.icon} className="icon" alt="icon"/>
                <span>{menus.name}</span>
              </a>
            ))}
        </div> 
        )
      }
    </div>
  )
}

export default Sidebar