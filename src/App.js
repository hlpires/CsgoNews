import React from 'react'
import {Routes,Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar,CsgoBala,Art,Home,Header,Noticias,Teamfilter} from './components';

import './App.css';
const App = () => {
  return (
    <div className="app">
      <Layout>
         <Header/>
         <Layout>
           <Teamfilter/>
           <Home/>
         </Layout>  
        
        <div className='footer'>
          <Typography level = {5} style= {{color:"white",textAlign:"center"}}>
          CsgoBala <br/>
          All rights reserved
          </Typography>
          <Space>
            
            <Link to= "/home">Home</Link>
            <Link to= "/csgobala">csgoBala</Link>
            <Link to= "/exchanges">Exchanges</Link>
          </Space>        
        </div>

      </Layout>
    </div>
  );
}

export default App