import "./userdetails.scss";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../config/api";
const UserDetails = () => {
  return (
    <div className='detailsContainer'>
      
      <div className='back'>
          <a href="/users">
            <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665401742/Lendsqr/icons/ArrowBack_hgulid.svg" alt='back_icon'/>
            <span>
              Back to Users
            </span>
          </a>
   
      </div>
     
      <div className='profile'>
        <div className="title">
            User Details
        </div>


        <div className="btn">
          <button className="blacklist">Blacklist User</button>
          <button className="activate">Activate User</button>
        </div>
      </div>

      <div className='general'>
        <div className="info">   
          <div className="avatar">
            <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665401742/Lendsqr/icons/userIcon_jhxo4d.svg" alt="avatar" />
          </div>

          <div className="name">
              <p>Grace</p>
              <p>LSQFf587g90</p>
          </div>

          <img src ="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665418353/Lendsqr/icons/Divider_lap7ni.svg" alt="divider"/>

          
            <div className="rating">
              <p>User's Tier</p>
              <span>
                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665401742/Lendsqr/icons/star_my8xjh.svg" alt="star"/>
                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665401742/Lendsqr/icons/star_my8xjh.svg" alt="star"/>
                <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665401742/Lendsqr/icons/star_my8xjh.svg" alt="star"/>
              </span>
              
            </div>

            <img src ="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665418353/Lendsqr/icons/Divider_lap7ni.svg" alt="divider"/>

            <div className="amount">
              <p>#200,000</p>
              <p>99123456789/Providus Bank</p>
            </div>
          </div>
      </div>

      <div className="personal">
        <h3>Personal Information</h3>
        <div className="info">
          <div className="person">
            <div className="data">
                <p>Full Name</p>
                <p>Grace Effiom</p>
            </div>

            <div className="data"> 
                <p>Phone Number</p>
                <p>07060780922</p>
            </div>

            <div className="data"> 
                <p>Email Address</p>
                <p>grace@gmail.com</p>
            </div>

            <div className="data"> 
                <p>BVN</p>
                <p>07060780922</p>
            </div>

            <div className="data"> 
                <p>Gender</p>
                <p>Female</p>
            </div>

            <div className="data">
                <p>Marital status</p>
                <p>Single</p>
            </div>

            <div className="data"> 
                <p>Children</p>
                <p>None</p>
            </div>

            <div className="data"> 
                <p>Type of residence</p>
                <p>Parent’s Apartment</p>
            </div>
          </div> 
        </div>

        <h3>Education and Employment</h3>
        <div className="info">
          <div className="person">
            <div className="data">
                <p>level of education</p>
                <p>B.Sc</p>
            </div>

            <div className="data"> 
                <p>employment status</p>
                <p>Employed</p>
            </div>

            <div className="data"> 
                <p>sector of employment</p>
                <p>FinTech</p>
            </div>

            <div className="data"> 
                <p>Duration of employment</p>
                <p>grace@lendsqr.com</p>
            </div>

            <div className="data"> 
                <p>office email</p>
                <p>Female</p>
            </div>

            <div className="data">
                <p>Monthly income</p>
                <p>₦200,000.00- ₦400,000.00</p>
            </div>

            <div className="data"> 
                <p>loan repayment</p>
                <p>40,000</p>
            </div>
          </div> 
        </div>
          
        <h3>Socials</h3>
        <div className="info">
          <div className="person">

            <div className="data">
              <p>Twitter</p>
              <p>@grace_effiom</p>
            </div>

            <div className="data">
              <p>Facebook</p>
              <p>Grace Effiom</p>
            </div>

            <div className="data">
              <p>Instagram</p>
              <p>@grace_effiom</p>
            </div>
          </div>
        </div>

        <h3>Guarantors</h3>
        <div className="info">
          <div className="person">
            <div className="data">
              <p>full Name</p>
              <p>Debby Ogana</p>
            </div>

            <div className="data">
              <p>Phone Number</p>
              <p>07060780922</p>
            </div>

            <div className="data">
              <p>Email Address</p>
              <p>debby@gmail.com</p>
            </div>

            <div className="data">
              <p>Relationship</p>
              <p>Sister</p>
            </div>

          </div>
        </div>

        <h3>""</h3>
        <div className="info">
          <div className="person">
            <div className="data">
              <p>full Name</p>
              <p>Debby Ogana</p>
            </div>

            <div className="data">
              <p>Phone Number</p>
              <p>07060780922</p>
            </div>

            <div className="data">
              <p>Email Address</p>
              <p>debby@gmail.com</p>
            </div>

            <div className="data">
              <p>Relationship</p>
              <p>Sister</p>
            </div>

          </div>
        </div>

        </div>
      
    </div>
  )
}

export default UserDetails