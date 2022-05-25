import React from 'react';
import {Button,Menu,Typography, Avatar,Space } from 'antd';
import {Link} from 'react-router-dom'
import {HomeOutlined,BankOutlined, BulbOoutlined, HourglassOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../images/cslogo.jpg'

const Navbar = () => {
  return (
    <div className="nav-container">
    <div className = "logo-container">
      <Avatar src={icon} size={64} shape="square"/>
      
        <Link to="./">
          <h3 className = "navbarHeader">CSGO NEWS</h3>
        </Link>      
      
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<HourglassOutlined/>}>
          <Link to="/csgobala">Hora da Bala</Link>
          </Menu.Item>

          <Menu.Item icon={<BankOutlined/>}>
          <Link to="/exchanges">Melhores Odds</Link>
          </Menu.Item>
          
      </Menu>
    </div>  
  )
}

export default Navbar