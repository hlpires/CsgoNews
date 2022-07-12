import React from 'react'
import {Routes,Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar,CsgoBala,Art,Home,Header,Noticias,Teamfilter} from './components';

import './App.css';
const App = () => {
  return (
    <div className="app">
      <Header/>      
      <Home/>
    </div>
  );
}

export default App