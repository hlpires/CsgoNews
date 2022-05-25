import React from 'react'
import Headerlogo from '../images/cslogo.jpg'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row} from 'antd';
import InstagramLogo from '../images/instalogo.png'
import Facebooklogo from '../images/facebookicon.png'
import Atiradorlogo from '../images/atiradorlogo.png'


const Header = () => {
  return (
  <Menu className="header">
    <div className="headeritems"> 
      <div className='headertext' >       
        <a target="_blank" rel="noopener noreferrer" href="">
          <img id= 'shooter'className="headericons" src={Atiradorlogo} alt="" />
        </a>
        <h1 className="textHeader">Counter Strike</h1>
        <h2 className="subtextHeader">Global Ofensive NEWS</h2>   
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img className="headericons" src={InstagramLogo} alt="" />  
        </a>   
      </div>
    
      <div>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img className="headericons" src={Facebooklogo} alt="" />  
        </a>   
      </div>
    </div>
  </Menu>
);
  
}

export default Header