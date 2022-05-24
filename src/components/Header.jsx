import React from 'react'
import Headerlogo from '../images/cslogo.jpg'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';



const Header = () => {
  return (
    <Menu className="headeritems"
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            Instagram
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            facebook
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
           <img className="headericons" src={Headerlogo} alt="" />
            
          </a>
        ),
      },
    ]}
  />
);
  
}

export default Header