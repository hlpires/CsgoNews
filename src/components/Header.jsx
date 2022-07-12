import React from 'react'
import Cslogo from '../images/cslogo.png'



const Header = () => {
  return (
  <div className="header">
    <div className="headeritems"> 
    <img src={Cslogo} className = "csgoimage" alt="" />
    <h1 className= "headerText">Counter Strike News</h1>
    </div>
  </div>
);
  
}

export default Header