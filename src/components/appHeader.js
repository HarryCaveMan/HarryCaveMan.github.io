import React from 'react';
import Particles from 'react-particles-js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


   const AppHeader = props => 
   
    <div id="header">
    <header className="App-header">
        <h1 id="title">Harris Joseph</h1>      
    <Particles className="pcanvas" height="120px" />
    </header>
    <AppBar style={{position:"fixed", top:"120px"}} position="static" color="dark">
    <Tabs value={props.value} onChange={props.handleChange}>
        <Tab value="/home" label="Home"/>
        <Tab value="/portfolio" label="Portfolio"/>
        <Tab value="/contact" label="Contact"/>
    </Tabs>
    </AppBar>
    </div>

export default AppHeader;