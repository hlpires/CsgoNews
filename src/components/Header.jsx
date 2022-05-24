import React from 'react'
import Headerlogo from '../images/cslogo.jpg'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';



const Header = () => {
  return (
  <Menu className="header">
    <div className="headeritems"> 
      <div>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img className="headericons" src={Headerlogo} alt="" />  
        </a>   
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img className="headericons" src={Headerlogo} alt="" />  
        </a>   
      </div>
    
      <div>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img className="headericons" src={Headerlogo} alt="" />  
        </a>   
      </div>
    </div>
  </Menu>
);
  
}

export default Header