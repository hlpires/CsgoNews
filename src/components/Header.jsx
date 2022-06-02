import React from 'react'
import Cslogo from '../images/cslogo.jpg'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row} from 'antd';


const Header = () => {
  return (
  <Menu className="header">
    <div className="headeritems"> 
    <img src={Cslogo}  classname = "csimage" alt="" />
    </div>
  </Menu>
);
  
}

export default Header