import React from 'react';
import {Button,Menu,Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom'
import {HomeOutlined,BankOutlined, BulbOoutlined, HourglassOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../images/cslogo.jpg'

const Navbar = () => {
  return (
    <div className="nav-container">
    <div className = "logo-container">
      <Avatar src={icon} size={64} />  
        <Link to="./">csgoNEWS</Link>      
      
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<HourglassOutlined/>}>
          <Link to="/csgobala">CsgoBala</Link>
          </Menu.Item>

          <Menu.Item icon={<BankOutlined/>}>
          <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          
      </Menu>
    </div>  
  )
}

export default Navbar