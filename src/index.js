import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';
import Store from './app/store'
import {Provider} from 'react-redux'



const root = createRoot(document.getElementById('root'));



root.render(
<Router>
    <Provider store={Store} >
            <App/>   
    </Provider> 
</Router>, );
 