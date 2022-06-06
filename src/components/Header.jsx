import React from 'react'
import Cslogo from '../images/cslogo.png'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row} from 'antd';


const Header = () => {
  return (
  <Menu className="header">
    <div className="headeritems"> 
    <img src={Cslogo} className = "csgoimage" alt="" />
    <h1 className= "headerText">Counter Strike News</h1>
    </div>
  </Menu>
);
  
}

export default Header