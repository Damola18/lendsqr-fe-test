import React from 'react'
// import {
//   activeUser,
//   audit,
// } from "../../assets/icons";

import LoanLogo from "../../assets/icons/audits.svg";

import "./sidebar.scss";

const sidebarMenu = [
  {
    section:"",
    menu: [
      {
        name:"Switch Organization",
        link: "",
        icon: ""
      },
      {
        name:"Dashboard",
        link:"/",
        icon: ""
      }
    ]
  },

  {
    section: "CUSTOMERS",
    menu: [
      {
        name:"Users",
        link:"",
        icon: <LoanLogo/>
      }, 
      {
        name:"Guarantors",
        link:"",
        icon: ""
      },
      {
        name:"Loans",
        link:"",
        icon: ""
      },
      {
        name:"Decision Models",
        link:"",
        icon: ""
      }, 
      {
        name:"Savings",
        link:"",
        icon: ""
      }, 
      {
        name:"Loan Requests",
        link:"",
        icon: ""
      },
      {
        name:"Whitelist",
        link:"",
        icon: ""
      }, 
      {
        name:"Karma",
        link:"",
        icon: ""
      }
    ]
  },
  {
    section: "BUSINESS",
    menu: [
      {
        name:"Organization",
        link:"",
        icon: ""
      }, 
      {
        name:"Loan Products",
        link:"",
        icon: ""
      },
      {
        name:"Savings Products",
        link:"",
        icon: ""
      },
      {
        name:"Fees and Charges",
        link:"",
        icon: ""
      },
      {
        name:"Transactions",
        link:"",
        icon: ""
      },
      {
        name:"Services",
        link:"",
        icon: ""
      },
      {
        name:"Service Account",
        link:"",
        icon: ""
      },
      {
        name:"Settlements",
        link:"",
        icon: ""
      },
      {
        name:"Reports",
        link:"",
        icon: ""
      }
    ]
  },
  {
    section: "SETTINGS",
    menu: [
      {
        name:"Preferences",
        link:"",
        icon: ""
      },
      {
        name:"Fees and Pricing",
        link:"",
        icon: ""
      },
      {
        name:"Audit Logs",
        link:"",
        icon: ""
      }
    ]
  }
]

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebarMenu.map( nav => 
        <div className="header" key={nav.section}>
          <p>{nav.section}</p>
            { nav.menu.map( menu => (
              <a href={menu.link} key={menu.name}>
                {/* {menu.icon} */}
                <span>{menu.name}</span>
              </a>
            ))}
        </div> 
        )
      }
    </div>
  )
}

export default Sidebar